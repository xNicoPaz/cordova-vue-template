<template>
	<div>
		<v-toolbar class="white">
			<v-toolbar-title v-text="title"></v-toolbar-title>
		
			<v-spacer></v-spacer>

			<v-btn class="blue" @click="onLoginButtonClick">Login</v-btn>
			<v-btn class="green">Register</v-btn>
		</v-toolbar>
	</div>
</template>
<script>
	export default{
		props: [ 'title' ],
		name: 'public-toolbar',
		methods: {
			onLoginButtonClick () {
				this.$router.push('/login')
			}
		}
	}	
</script>