import Vue from 'vue';
import VueRouter from 'vue-router';
import config from './router.config';
Vue.use(VueRouter);
const router = new VueRouter({
    router: config
});
export default  router;
