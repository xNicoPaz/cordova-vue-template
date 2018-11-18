<template>
	<v-app id="inspire">
		<v-content>
			<v-container fluid fill-height>
				<v-layout align-center justify-center>
					<v-flex xs12 sm8 md4>
						<v-card class="elevation-12">
							<v-toolbar dark color="primary">
								<v-toolbar-title>Login</v-toolbar-title>
								<v-spacer></v-spacer>
								<v-tooltip bottom>

								</v-tooltip>
							</v-toolbar>
							<v-card-text>
								<v-form>
									<v-text-field prepend-icon="email" name="email" label="Email" type="text"
										v-model="loginForm.email"
									></v-text-field>
									<v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"
										v-model="loginForm.password"
									></v-text-field>
								</v-form>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<!-- <v-btn color="primary" @click="$router.push('/home/client')">Login</v-btn> -->
								<v-btn color="primary" @click="onLoginButtonClick">Login</v-btn>
							</v-card-actions>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

	export default {
		data () {
			return {
				loginForm: {
					email: null,
					password: null
				}
			}
		},
		computed: {
			...mapGetters({ 
				email: '_public/loginEmail',
				password: '_public/loginPassword'
			})
		},
		methods: {
			...mapActions({
				attemptLogin: '_public/loginAttemptLogin'
			}),
			onLoginButtonClick () {
				this.attemptLogin({

				})
			}
		}
	}
</script>