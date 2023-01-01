<script setup lang="ts">
import { onMounted, ref } from 'vue'
const setTitle = window.versions.setTitle
// import {ipcRenderer} from 'electron'
defineProps<{ msg: string }>()

const count = ref(0)
const btn_click = () => {
  count.value++
  setTitle(count.value)
}
const os_name = ref('')
onMounted(async () => {
  window.versions.handle_main_event((e, msg)=>{
    console.log('ok,ths', msg)
  })
  os_name.value = await window.versions.get_os_name()
})
</script>

<template>
  <h1>{{ os_name }}</h1>
  <div class="card">
    <button type="button" @click="btn_click">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
