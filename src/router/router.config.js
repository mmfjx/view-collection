import Home from '../pages/home/index.vue';
import Miserables from '../pages/miserables/index.vue';
import Bpmn from '../pages/bpmn/index.vue';

const router = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/miserables',
        name : 'miserables',
        component: Miserables
    },
    {
        path: '/bpmn',
        name : 'bpmn',
        component: Bpmn
    }
];

export default  router;

