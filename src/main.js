import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

import NavBar from './components/NavBar.vue'  // Add this line

const app = createApp(App)

app.component('NavBar', NavBar)  // Register NavBar globally
app.use(router).mount('#app')
