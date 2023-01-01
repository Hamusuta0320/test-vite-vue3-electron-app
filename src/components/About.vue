<template>
    <div>
        {{ data }}
    </div>
</template>

<script lang="ts" setup>
import axios from "axios"
import { ref } from "vue";
const data = ref('')
axios.get("/baidu/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=axios%20%E8%AE%BF%E9%97%AE%E4%BB%BB%E6%84%8F%E7%AC%AC%E4%B8%89%E6%96%B9%E6%8E%A5%E5%8F%A3&oq=axios%2520%25E7%25AC%25AC%25E4%25B8%2589%25E6%2596%25B9%25E6%258E%25A5%25E5%258F%25A3%25E8%25B7%25A8%25E5%259F%259F&rsv_pq=80623218000c96b1&rsv_t=1796ublXqp3R8LAhXdctOD0cQbze6%2Fl4CfsA%2BqOyS7xmKf%2FlRmQrIh4tenQ&rqlang=cn&rsv_dl=tb&rsv_enter=0&rsv_btype=t&inputT=9481&rsv_sug3=937&rsv_sug1=638&rsv_sug7=100&rsv_sug2=0&rsv_sug4=10190").then(web_data=> {
    console.log(web_data);
    data.value = web_data.data
})
</script>

<style>
</style>
