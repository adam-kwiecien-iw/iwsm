import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DropDown from "./components/DropDown"
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);

app.component("DropDown", DropDown);
app.use(router);
app.use(VueAxios, axios)
app.mount('#app')
//config.compilerOptions.isCustomElement = tag => tag === 'drop-down'
//createApp(App).use(router).mount('#app')
