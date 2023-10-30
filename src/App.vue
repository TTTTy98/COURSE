<template>
  <div class="app-box">
    <router-view></router-view>
  </div>
</template>
<script setup>
import { computed } from "vue";
import {useStore} from 'vuex';
const store = useStore();
const userInfo = computed(() => {
  return JSON.stringify(localStorage.getItem("userInfo"));
});
if (userInfo.value) {
  store.commit("SET_USER_INFO", userInfo.value);
}
</script>
<style scoped>
.app-box {
  height: 100%;
}
.app-box:first-child {
  height: 100%;
}
</style>
