<template>
	<div>
		<v-app light>
			<Toolbar v-bind:title='toolbarTitle'></Toolbar>
			<v-content>

				<router-view></router-view>

				<Footer></Footer>
			</v-content>
		</v-app>
	</div>
</template>

<script>
	import Footer from './Footer'
	import Toolbar from './Toolbar'

	// CSS de Vuetify. La parte publica de la aplicacion usara Vuetify
	import VuetifyCSS from '../../../../node_modules/vuetify/dist/vuetify.min.css'
	// CSS de Material Icons, va con Vuetify
	import MaterialIconsCSS from '../../../../node_modules/material-design-icons/iconfont/material-icons.css'

	export default {
		name: 'master',
		components: { Footer, Toolbar },
		data () {
			return {
				toolbarTitle: 'Cordova + Vue + Vuetify Template' 
			}
		}
	}
</script>