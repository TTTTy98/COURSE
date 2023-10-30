<template>
  <div class="app-box">
    <el-container>
      <!-- <el-header>
        <div style="width:400px">
          <p style="float: left;">
            <div class="icon"></div>
          </p>
          <p style="float: left;font-size: 25px; font-weight: bold">
            welcome
          </p>
        </div>

      </el-header> -->
      <el-main>
        <div class="login_card">
          <div class="logopic">

          </div>
          <el-card>
            <el-form
              :model="form"
              :rules="rules"
              ref="ruleFormRef"
              label-width="80px"
            >
              <p class="title">Marvelous Miracle</p>
              <el-form-item label="upi：" prop="upi">
                <el-input v-model="form.upi" placeholder="Please enter upi" />
              </el-form-item>
              <el-form-item label="Password：" prop="password">
                <el-input
                  type="password"
                  placeholder="Please enter password"
                  v-model="form.password"
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit()">Login</el-button>
                <el-button type="primary" @click="resetForm()">reset</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </div>
      </el-main>
      <el-footer>
        <div>contact us<el-tag>nxia585@aucklanduni.ac.nz</el-tag></div>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import userApi from "../api/user";
import { reactive, ref, getCurrentInstance } from "vue";
import { ElMessage } from "element-plus";
import logoJpg from "../assets/img/icon.png";
import router from "../router/index";
import { useStore } from "vuex";
const store = useStore()
const { proxy } = getCurrentInstance();
const form = reactive({
  upi: "",
  password: "",
});
const ruleFormRef = ref();
const rules = reactive({
  upi: [
    { required: true, message: "The upi cannot be empty!", trigger: "blur" },
  ],
  password: [
    {
      required: true,
      message: "The Password cannot be empty!",
      trigger: "blur",
    },
  ],
});
const onSubmit = () => {
  if (!ruleFormRef) return;
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      userApi.login(form).then((res) => {
        if (!res.data.user) {
          ElMessage.error(res.data.remark);
          return;
        }
        proxy.$commonJs.changeView("/home");
        ElMessage.success("Welcome!"); 
        store.commit('SET_USER_INFO', res.data.user)
        const time = new Date().getTime()
        localStorage.setItem('userInfo', JSON.stringify(res.data.user))
      });
    } else {
      return false;
    }
  });
};
const resetForm = () => {
  if (!ruleFormRef) return;
  ruleFormRef.value.resetFields();
};
</script>

<style scoped>
.el-container {
  height: calc(100% - 18px);
}

.el-header {
  height: 10%;
}
.title {
  margin-top: 0px;
  font-weight: bold;
}
.el-main {
  height: 100%;
  background-image: url("../assets/img/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position-y: bottom;
}
.icon {
  width: 10px;
  background-image: url("../assets/img/icon.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.logopic {
  width: 120px;
  height: 120px;
  position: absolute;
  background-image: url("../assets/img/icon.png");
  background-repeat: no-repeat;
  background-size: cover;
  top: -43%;
}
.login_card {
  /* margin: 200px 500px; */
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  height: 200px;
  border-radius: 10px;
  text-align: center;
}

.el-footer {
  height: 18px;
  text-align: center;
  padding: 4px 0;
  box-sizing: border-box;
}
</style>
