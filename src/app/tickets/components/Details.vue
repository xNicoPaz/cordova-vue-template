<template>
	<v-layout>
		<v-flex xs-12 md-10 lg-8>
			<ticket-header :title="models.ticket.title" :header="models.ticket.header" :client="models.ticket.user"></ticket-header>
			<br><br>
			<ticket-intervention v-for="intervention in models.ticket.interventions" :intervention="intervention"></ticket-intervention>
			<v-text-field label="Intervenga en el ticket" textarea v-model="models.reply.body"></v-text-field>
			<v-spacer></v-spacer>
			<v-btn color="primary" @click="onSubmitReply">enviar respuesta</v-btn>
		</v-flex>
	</v-layout>
</template>

<script>
import TicketHeader from '../partials/layout/TicketHeader';
import TicketIntervention from '../partials/layout/TicketIntervention';

export default{
	components: { TicketHeader, TicketIntervention },
	data(){
		return {
			models: {
				ticket: null,
				reply: {
					user_id: 1,
					body: null
				},
			},
			shared: window.sharedData,
		};
	},
	methods: {
		onSubmitReply(){
			this.models.reply.ticket_id = this.models.ticket.id;
			window.axios.post(window.Url.replyStoreUrl(this.models.ticket.id), this.models.reply)
			.then((response) => {
				console.log(response);
				this.reloadData();
			});
		},
		reloadData(){
			window.axios.get(window.Url.ticketDetailsUrl(this.$route.params.id))
			.then((response) => {
				this.models.ticket = response.data;
				this.models.ticket.header = this.models.ticket.interventions[0];
				this.models.ticket.interventions = this.models.ticket.interventions.slice(1);
			});			
		}
	},
	created(){
		//Cargar los detalles del ticket
		this.reloadData();
	}
}
</script>
