document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'no-api-1.0',
			TaxiCount:0,
			PassengerCount:0,
			 joinQueue() {
				let count=1;
			 return this.PassengerCount=this.PassengerCount+count;
			},
		
			 leaveQueue() {
			if(this.PassengerCount>0){
				let count=1;
				return this.PassengerCount=this.PassengerCount-count;
			}
			else{
				return;
			}
			},
		
			 joinTaxiQueue() {
				let count=1;
				return this.TaxiCount=this.TaxiCount+count;
			},
		
			 queueLength() {
		   return this.PassengerCount.length
			}
		,
			 taxiQueueLength() {
			 return this.TaxiCount.length
			}
		,
			 taxiDepart(){
				
			   if(this.PassengerCount>=12 && this.TaxiCount>=1){
				let count=1;
				this.PassengerCount=this.PassengerCount-12;
				this.TaxiCount=this.TaxiCount-count;
				
			 }
			 else if(this.TaxiCount===0 ||this.PassengerCount===0){
				return;
			 }
			}
		}

	});

});


