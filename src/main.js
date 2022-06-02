import {createApp} from 'vue'
import App from '@/App.vue'
import router from "@/router";
import store from "@/store";

// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

// app.component('VueSidebarMenu', VueSidebarMenu);
// app.use(VueSidebarMenu)


// app.use()

// new Vue({
//     render : h => h(App),
// }).$mount('#app')

