import Home from '../components/Home'
import Login from '../components/Login'
import Master from '../../../components/public/Master'

export default [
	{
		path: '/',
		component: Master,
		children: [
			{
				path: '/',
				component: Home
			}
		]
	},
	{
		path: '/login',
		component: Login
	}
]