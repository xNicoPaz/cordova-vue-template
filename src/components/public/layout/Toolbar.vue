<template>
	<div>
		<v-toolbar class="white">
			<v-toolbar-title v-text="title"></v-toolbar-title>
		</v-toolbar>
	</div>
</template>
<script>
	export default{
		props: [ 'title' ],
		name: 'public-toolbar'
	}	
</script>