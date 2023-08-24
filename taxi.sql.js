import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();

    //retreive the passenger counter form the database
    const PassengerCountSql=`select passenger_queue_count from taxi_queue`;
    const passengerQuery=await db.all(PassengerCountSql);
   // console.log(passengerQuery[0].passenger_queue_count)
    let PassengerCount=passengerQuery[0].passenger_queue_count;


    //retreive the taxi counter from the database
    const sql=`select taxi_queue_count from taxi_queue`;
    const taxiQuery=await db.all(sql);
    let taxiCount=taxiQuery[0].taxi_queue_count;
    
export async function joinQueue() {
    // console.log('join queue')
    let passenger=1;
    PassengerCount=passenger+PassengerCount;
    //console.log(PassengerCount)
    const sql=`update taxi_queue set passenger_queue_count=${PassengerCount} where id=1`
    return await db.run(sql);
}

export async function leaveQueue() {
    let passenger=1;
    
       if(PassengerCount===0){
        return;
       }
       else{
        PassengerCount=PassengerCount-passenger;
        const sql=`update taxi_queue set passenger_queue_count=${PassengerCount} where id=1`
        return await db.run(sql);
       }
}

export async function joinTaxiQueue() {
    let taxi=1;
    taxiCount=taxiCount+taxi;
    const sql=`update taxi_queue set taxi_queue_count=${taxiCount} where id=1`
        return await db.run(sql);
   
}

export async function queueLength() {
//     const sql=`select passenger_queue_count from taxi_queue where id =1`;
//  const count=await db.run(sql);
 const sql=`update taxi_queue set passenger_queue_count=${PassengerCount} where id=1`
 await db.run(sql);
 return PassengerCount;
}

export async function taxiQueueLength() {
//  const sql=`select taxi_queue_count from taxi_queue where id =1`;
//  const count=await db.run(sql);
 const sql=`update taxi_queue set taxi_queue_count=${taxiCount} where id=1`
 await db.run(sql);
 return taxiCount;
}

export async function taxiDepart() {
    let myTaxiCount=1;
    if(taxiCount>0 && PassengerCount>11){
        taxiCount=taxiCount-myTaxiCount;
        PassengerCount=PassengerCount-12
        const sql=`update taxi_queue set taxi_queue_count=${taxiCount} where id=1`
        return await db.run(sql);
    }
    else{
        return
    }
}