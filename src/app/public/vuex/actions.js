// export const asociarUsuarioNiveles = ({commit}, {payload, context}) => {
//     commit('setLoading', true)
//     toastr.options = {
//         "positionClass": "toast-bottom-right"
//     }
//     return axios.post('/api/gastos/asociarUsuarioNiveles', payload).then((response) => {
//         commit('setLoading', false)
//         if (response.data.estado == 1) {
//             toastr["success"]("Asociacion Correcta", "Niveles")
//             context.userdata = null
//             context.usuario = null
//             context.NivelesSeleccionados = []
//         }
//         else {
//             toastr["error"](response.data.mensaje, "Niveles")
//         }
//     }).catch((error) => {
//         commit('setLoading', false)
//         context.errors = error.response.data.errors
//     })
// }

export const loginAttemptLogin = ({ commit }, data) => {

}