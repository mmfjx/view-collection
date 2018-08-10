import Home from '../pages/home/index.vue';
import RadialForce from '../pages/radialForce/index.vue';
const router = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/radialForce',
        name : 'radialForce',
        component: RadialForce
    }
];

export default  router;

