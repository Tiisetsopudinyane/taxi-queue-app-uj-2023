document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'api-1.0',
			queuecounter: 0,
			taxiCounter:0,
			message:'',
			init() {
					this.queueLength(),
					this.taxiQueueLength()
				
			},
			joinQueue() {
				axios
				.post('/api/passenger/join')
				.then(result => {
					this.message = result.data.message;
				});
				    this.queueLength(),
					this.taxiQueueLength()
				
			},
			leaveQueue() {
				axios
				.post('/api/passenger/leave')
				.then(result => {
					this.message = result.data.message;
				});
				    this.queueLength(),
					this.taxiQueueLength()
				
			},

			joinTaxiQueue() {
				axios
				.post('/api/taxi/join')
				.then(result => {
					this.message = result.data.message;
				});
				    this.queueLength(),
					this.taxiQueueLength()
				
			},

			queueLength() {
				axios
				.get('/api/passenger/queue')
				.then(result => {
					this.queuecounter = result.data.queueCount;
				});
			},

			taxiQueueLength() {
				axios
				.get('/api/taxi/queue')
				.then(result => {
					this.taxiCounter = result.data.queueCount;
				});
			},

			taxiDepart() {
				axios
				.post('/api/taxi/depart')
				.then(result =>{
					this.message=result.data.message;
				});
				    this.queueLength(),
					this.taxiQueueLength()
			}
		}
	});

});

