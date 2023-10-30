<template>
  <div class="app-box">
    <router-view></router-view>
  </div>
</template>
<script setup>
import { computed } from "vue";
import userApi from "./api/user";
const sessionUpi = computed(() => {
  return sessionStorage.getItem("userName");
});
const sessionPwd = computed(() => {
  return sessionStorage.getItem("pwd");
});
if (sessionUpi.value && sessionPwd.value) {
  userApi
    .login({
      upi: sessionUpi.value,
      password: sessionPwd.value,
    })
    .then((res) => {
      if (!res.data.user) {
        ElMessage.error(res.data.remark);
        return;
      }
      console.log(123123123, JSON.stringify(res.data.user));
      store.commit("SET_USER_INFO", res.data.user); 
    });
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
