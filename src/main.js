import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mixins from "@/mixins";

Vue.mixin(mixins);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
