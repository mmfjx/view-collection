<template>
    <ul>
        <li>
            <router-link to="/" class="margin-right">home</router-link>
        </li>
        <li>
            <router-link to="/miserables">miserables</router-link>
        </li>
        <li>
            <router-link to="/bpmn">bpmn</router-link>
        </li>
    </ul>
</template>

<script type="text/javascript">
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
