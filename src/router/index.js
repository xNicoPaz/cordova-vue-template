import Vue from 'vue'
import Router from 'vue-router'
// Componentes de layout
import PublicMaster from '@/components/public/layout/Master'
import PublicHome from '@/components/public/Home'

Vue.use(Router)

export default new Router({
  routes: [
	{
	  path: '/',
	  component: PublicMaster,
	  children: [
		{
			path: '/',
			component: PublicHome
		}
	  ]
	}
  ]
})
