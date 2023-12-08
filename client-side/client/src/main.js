import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css";
import vue3GoogleLogin from "vue3-google-login"

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(vue3GoogleLogin, {
    clientId: "23338795543-5lr19iet2b681tun5mf7kgj8tc36ice1.apps.googleusercontent.com"
})
pinia.use(({store}) => {
    store.router = markRaw(router)
})
const options = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 10,
    newestOnTop: true,
    closeButton: "button",
}
app.use(pinia)
app.use(router)
app.use(Toast, options)

app.mount('#app')
