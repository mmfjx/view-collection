<template>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script type="text/javascript">
import helloWorld from '../../components/HelloWorld';
export default {
    // 不要忘记了 name 属性
    name: 'home',
    // 组合其它组件
    extends: {},
    // 组件属性、变量
    props: {

    // 按字母顺序
    },
    // 变量
    data () {
        return {

        }

    },
    computed: {},
    // 使用其它组件
    components: {
        helloWorld
    },
    // 方法
    watch: {},
    methods: {},
    // 生命周期函数
    beforeCreate () {},
    mounted () {}
};
</script>

<style scoped >


</style>
