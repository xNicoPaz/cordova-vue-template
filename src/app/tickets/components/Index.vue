<template>
	<v-container fluid fill-height>
		<v-flex xs-12 fill-height>
			<h3 class="headline">Ver tickets registrados</h3>
			<breadcrumbs :items="breadcrumbItems"></breadcrumbs>

			<v-card>
				<v-card-title>
					Tickets de Juan Perez
					<v-spacer></v-spacer>
					<v-text-field append-icon="search" label="Buscar" single-line hide-details v-model="grid.searchText"></v-text-field>
				</v-card-title>
				<v-data-table class="elevation-1" :headers="grid.headers" :items="grid.data" :search="grid.searchText" :loading="grid.isLoading" hide-actions>
					<v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
					<template slot="items" slot-scope="props">
						<td class="text-md-center text-xl-center text-sm-center">{{ props.item.id }}</td>
						<td class="text-md-left">{{ props.item.title }}</td>
						<td class="justify-center layout px-0">
							<v-btn class="mx-0" icon @click="$router.push('/tickets/' + props.item.id)">
								<v-icon color="primary">search</v-icon>
							</v-btn>
							<v-btn class="mx-0" icon>
								<v-icon color="red">delete</v-icon>
							</v-btn>
						</td>
					</template>
					<template slot="no-data">
						<h3 class="body-2">No tiene tickets registrados</h3>
					</template>
				</v-data-table>

			</v-card>
		</v-flex>	
	</v-container>
</template>

<script>
import Breadcrumbs from '../partials/layout/Breadcrumbs';
export default{
	components: { Breadcrumbs },
	data(){
		return{
			grid: {
				headers: [
					{ text: 'Identificación', value: 'id', align: 'center', sortable: false },
					{ text: 'Titulo', value: 'title', align: 'left', sortable: true },
					{ text: 'Acciones', value: 'actions', align: 'center', sortable: false},
				],
				data: [],
				searchText: null,
				isLoading: true,
			},
			breadcrumbItems: [
				{text: 'Tickets', disabled: true},
			],
		};
	},
	created(){
		window.axios.get(window.Url.ticketIndexUrl())
		.then((response) => {
			this.grid.data = response.data;
			this.grid.isLoading = false;
		});
	}
}
</script>