<template>
  <div>
    <el-container class="home-container">
      <!-- header -->
      <el-header>
        <el-row>
          <el-col :span="2">
            <el-avatar
              shape="square"
              :src="logoJpg"
              style="margin: 10px"
            ></el-avatar>
          </el-col>
          <el-col :span="8">
            <div class="tab-box">
              <div
                class="tab-item"
                index="/index"
                @click="saveActiveNav('/index')"
              >
                Course
              </div>
              <div
                class="tab-item"
                index="/user/list"
                @click="myApplications('/user/list')"
                v-show="ifStudent"
              >
                My Applications
              </div>
              <div
                class="tab-item"
                index="/user/CourseManagement"
                @click="saveActiveNav('/user/CourseManagement')"
                v-show="ifAdmin"
              >
                Course Management
              </div>
            </div>
          </el-col>
          <el-col :offset="9" :span="5" style="min-width: 150px">
            <el-dropdown style="float: right; margin: 20px 10px">
              <span
                class="el-dropdown-link"
                style="color: #fff; cursor: pointer"
              >
                {{ userData.userName }} &nbsp;&nbsp;
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    @click="
                      () =>
                        router.push({
                          path: '/user/detail',
                          query: { id: 123 },
                        })
                    "
                    >Details</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="logout"
                    >Log out</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-avatar
              shape="square"
              :src="avatar"
              style="margin: 10px; float: right"
            ></el-avatar>
          </el-col>
        </el-row>
      </el-header>

      <el-container style="overflow: auto">
        <!-- <el-aside>
                    <div class="toggle-button" @click="isCollapse = !isCollapse">
                        <el-icon :size="20">
                            <Expand v-if="isCollapse" />
                            <Fold v-if="!isCollapse" />
                        </el-icon>
                    </div>
                    <el-menu router :default-active="activePath" class="el-menu-vertical-demo" :collapse="isCollapse">
                        <el-menu-item index="/index" @click="saveActiveNav('/index')">
                            <el-icon>
                                <house />
                            </el-icon>
                            <span>首页</span>
                        </el-menu-item>
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <Setting />
                                </el-icon>
                                <span>系统设置</span>
                            </template>
                            <el-menu-item index="2-1">权限管理</el-menu-item>
                        </el-sub-menu>
                        <el-menu-item index="/user/list" @click="saveActiveNav('/user/list')">
                            <el-icon>
                                <user />
                            </el-icon>
                            <span>用户管理</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside> -->
        <el-container>
          <el-main>
            <!-- 面包屑   -->
            <!-- <Breadcrumb />   -->
            <!-- 主要内容   -->
            <router-view></router-view>
          </el-main>
          <!-- <el-footer>course management</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { onBeforeMount, ref, onMounted,computed } from "vue";
import avatar from "../assets/img/avator.jpg";
import logoJpg from "../assets/img/icon.jpg";
import { useRouter } from "vue-router";
import { Management } from "@element-plus/icons-vue";
import { useStore } from "vuex";
const store = useStore()
const router = useRouter();
const userRole = computed(() => store.getters["roleObj"]);
const userData = computed(() => store.getters["userData"]); 
const ifStudent = computed(() => userRole.value.isStudent);
const ifTeacher = computed(() => userRole.value.isTeacher);
const ifAdmin = computed(() => userRole.value.isAdmin);
console.log('userData',userData.value) 
// 挂载 DOM 之前
onBeforeMount(() => {
  activePath.value = sessionStorage.getItem("activePath")
    ? sessionStorage.getItem("activePath")
    : "/index";
});
let isCollapse = ref(false);
let activePath = ref("");
// 保存链接的激活状态
const saveActiveNav = (path) => {
  sessionStorage.setItem("activePath", path);
  activePath.value = path;
  router.push(path);
};
const myApplications = (path) => {
  sessionStorage.setItem("activePath", path);
  activePath.value = path;
  router.push({
    name: "User",
    query: {
      classId: "",
      major: "",
      studnetId: userData.value.id,
    },
  });
};
const logout = () => {
  // 清除缓存
  sessionStorage.clear(); 
  localStorage.removeItem('userInfo')
  // localStorage.clear()
 
  router.push("/login");
};
</script>

<style scoped lang="scss">
.home-container {
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 100%;
  background: #f2f3f5;
  
}

.el-header {
  background: #303133;
  padding: 0 10px;
  overflow: hidden;
}

.system-name {
  color: #fff;
  font-size: 18px;
}

.el-aside {
  background: white;
  width: auto !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-footer {
  color: #cccccc;
  text-align: center;
  line-height: 60px;
}

.el-footer:hover {
  color: #2661ef;
}

.toggle-button {
  background-color: #d9e0e7;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  color: black;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-item.is-active {
  color: #fff !important;
  font-size: 15px;
  font-weight: bold;
  background-color: #2661ef !important;
  border-radius: 2px;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  margin: 2px 5px 0px 2px;
}
.tab-box {
  display: flex;
  align-items: center;
  height: 100%;
}
.tab-item {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  padding: 0 80px;
  cursor: pointer;
  &:hover {
    border-bottom: 4px solid #fff;
    border-top: #2661ef 4px solid;
  }
}
</style>