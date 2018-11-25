<template>
	<v-layout justify-center align-center>
		<v-flex xs12 md10 sm12>
			<!-- <breadcrumbs :items="breadcrumbItems"></breadcrumbs> -->
			<v-card>
				<v-card-media src="/img/team3.jpeg" height="200px">
					<v-container fill-height fluid>
						<v-layout fill-height>
							<v-flex xs12 align-end flexbox>
								<span class="display-1 orange--text lighten-1">{{ title }}</span>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-media>
				<v-card-text>
					<v-container fill-height fluid>
						<v-layout fill-height>
							<v-flex xs12 md12>
								<v-text-field md10 label="Titulo" v-model="models.ticket.title" required ></v-text-field>
								<v-text-field md10 textarea label="Descripcion" v-model="models.ticket.description"></v-text-field>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="amber darken-3 white--text" @click.prevent="onTicketSubmit" v-if="!isFilling">registrar<v-icon right>fa-plus-square</v-icon></v-btn>
					<v-btn color="amber darken-3 white--text" @click.prevent="onFilledTicketSubmit" v-if="isFilling">Llenar<v-icon right>fa-plus-square</v-icon></v-btn>
					<v-btn color="primary">borrar<v-icon right>fa-trash</v-icon></v-btn>					
				</v-card-actions>
			</v-card>
	</v-flex>
</v-layout>
</template>

<script>
// import Breadcrumbs from '../partials/layout/Breadcrumbs.vue';

export default{
	// components: { Breadcrumbs },
	props: [
		'isFilling'
	],
	data(){
		return {
			models: {
				ticket: {
					title: null,
					description: null,
				}
			}
		};
	},
	created(){
		//Si esta Vue se esta usando para llenar un ticket,
		//entonces se agregara al modelo del ticket un ID
		//para que al ser enviado este model al backend ya
		//incluya todo lo necesario para el procesamiento
		if(this.isFilling){
			this.models.ticket.id = window.sharedData.undocumentedTicketId;
		}
	},
	methods: {
		redirectToTicket(ticketId){
			this.$router.push('/tickets/' + ticketId);
		},
		onTicketSubmit(){
			window.axios.post(Url.ticketStoreUrl(), this.models.ticket)
			.then((response) => {
				this.redirectToTicket(response.data.ticket_id);
			}).catch((response) => {
				console.log(response);
			});	
		},
		onFilledTicketSubmit(){
			console.log('llegue');
			window.axios.post(window.Url.undocumentedTicketFillUrl(), this.models.ticket)
			.then((response) => {
				this.redirectToTicket(response.data.ticket_id);
			})
			.catch((response) => {
				console.log(response);
			})
		}
	},
	computed: {
		title(){
			return (this.isFilling) ? 'Llenar ticket' : 'Registrar ticket';
		},
		breadcrumbItems(){
			return (this.isFilling) ? [
				{text: 'Tickets', disabled: true},
				{text: 'Llenar', disabled: true},
			] :
			[
				{text: 'Tickets', disabled: true},
				{text: 'Crear', disabled: true},
			];
		}
	}
}
</script>