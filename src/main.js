import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"
import router from "./router/router";

const app = createApp(App);
app
    .use(BootstrapVue3)
    .use(VNetworkGraph)
    .use(router)
    .mount('#app')
