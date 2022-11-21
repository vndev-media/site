import App from "./App.vue"

const app = Vue.createApp(App)
app.use(App.router)
app.mount('#app')
