<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>User details</span>
                    <el-button size="mini" style="float:right" @click="router.go(-1)">back</el-button>
                </div>
            </template>
                <el-form>
                <el-form-item label="Name:">
                    {{ userDetail.userName }}
                </el-form-item>
                <el-form-item label="Type:">
                    {{ userType }}
                </el-form-item>
                <el-form-item label="UPI:">
                    {{ userDetail.upi }}
                </el-form-item>
                <el-form-item label="Email:">
                    {{ userDetail.email }}
                </el-form-item>
            </el-form>
            
        </el-card>
    </div>
</template>

<script setup>
import { onBeforeMount, reactive, ref,onMounted,computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import userApi from "../../api/user";
const route = useRoute();
const router = useRouter();

const userDetail = ref([])
onMounted(() => {
    userDetail.value=JSON.parse(localStorage.getItem("user"))

  })
</script>

<style lang="scss" scoped>

</style>