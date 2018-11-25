<template>
	<v-flex xs-12 fill-height align-content-center id="videosContainer">
		<div id="remoteVideos"></div>
		<video id="localVideo" v-scroll="onScroll"></video>
	</v-flex>
</template>

<script>
export default{
	data(){
		return {

		};
	},
	props: [
		'isAttemptingToCallFromTicket'
	],
	created(){
		//Registrar la vista en el repositorio global
		//con el objetivo de que sea posible emitirle
		//eventos y que reaccione a estos
		window.Vues.videoCall = this;
		//Registrar un event listener para cuando finaliza
		//una llamada que requiere la creación de un ticket
		//indocumentado (es decir cuando el cliente simplemente
		//presiona para llamar y obtener ayuda sin haber
		//abierto ningun ticket previo)
		this.$on('signalToStoreUndocumentedTicket', this.onSignalToStoreUndocumentedTicket);
		//Registra un event listener para cuando finaliza
		//una llamada desde un ticket y hay que registrar
		//una nueva intervención de tipo llamada en el ticket
		this.$on('signalToStoreCallInterventionOnTicket', this.onSignalToStoreCallInterventionOnTicket);
	},
	mounted(){
		//CUANDO YA NO SEA UN PROTOTIPO
		//Si se accedio a esta vista desde la petición
		//para llamar desde un ticket, recuperar los datos
		//del ticket y llamar al empleado correspondiente 
		//Por el momento simplemente llamaremos
		if(this.isAttemptingToCallFromTicket){
			window.Vues.eventBus.$emit('requestToBeginCallFromTicket', null, true);
		}
	},
	methods: {
		onScroll(){
			let localVideo = document.getElementById('localVideo');
			let top = 5 + document.documentElement.scrollTop;
			let topString = top + "px";
			
			localVideo.style.top = topString;
		},
		onSignalToStoreUndocumentedTicket(){
			console.log('Estoy en onSignalToStore...');
			window.axios.post(window.Url.storeUndocumentedTicketUrl(), { supportServiceUserId: window.sharedData.userId })
			.then((response) => {
				console.log(response);
				//De alguna manera hacer que se devuelva el id de ticket 
				//para usarlo luego para redirigir al usuario
				window.sharedData.undocumentedTicketId = response.data.id;
			})
			.catch((response) => {
				console.log(response);
			});	
		},
		onSignalToStoreCallInterventionOnTicket(ticketId){
			console.log('El id del ticket es: ' + ticketId);
			window.axios.post(window.Url.storeCallInterventionOnTicketUrl(ticketId), {ticketId})
			.then((response) => {
				console.log(response);
			})
			.catch((response) => {
				console.log(response);
			});
		}
	},
	computed:{
		isClient(){
			return window.sharedData.scope === 'client';
		}
	}
}	
</script>

<style>
#videosContainer{
	position: relative;
}
.remoteVideo{
	width: 100%;
	height: 100%;
	z-index: 1;
	display: block;
}
#localVideo{
	position: absolute;
	top: 10px;
	right: 10px;
	width: 150px;
	height: 150px;
	z-index: 2;
}
</style>