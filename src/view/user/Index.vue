<template>
  <div>
    <el-card>
      <!-- <el-input style="width:440px" @clear="searchUser" clearable v-model="searchForm.name" placeholder="请输入用户姓名" class="input-with-select">
                <template #append>
                    <el-button icon="Search" @click="searchUser" />
                </template>
            </el-input> -->
      <el-table :data="tableData" border style="width: 100%; margin-top: 20px">
        <el-table-column prop="major" label="major" width="180" />
        <el-table-column prop="studentName" label="studentName" width="180" />
        <el-table-column prop="gpa" label="gpa" width="180" sortable />
        <el-table-column prop="grade" label="grade" width="180" sortable />
        <el-table-column prop="studyType" label="studyType" width="180" />
        <el-table-column prop="email" label="email" width="180" />
        <el-table-column prop="phone" label="phone" width="180" />
        <el-table-column
          prop="maxWorkload"
          label="maxWorkload"
          width="180"
          sortable
        />
        <el-table-column
          prop="previousExperience"
          label="previousExperience"
          width="250"
        />
        <el-table-column label="operate" width="300">
          <template #default="scope">
            <el-button
              type="success"
              size="small"
              @click="agreeUser(scope.row.id)"
              v-show="ifTeacher"
              >agree</el-button
            >
            <el-button
              type="danger"
              size="small"
              @click="deleteUser(scope.row.id)"
              >delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        style="margin-top: 20px"
        :current-page="searchForm.current"
        :page-size="searchForm.size"
        :page-sizes="[10, 20, 30, 40]"
        layout="->, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script setup>
import userApi from "../../api/user";
import { onMounted, reactive, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter, useRoute } from "vue-router";
import {useStore} from 'vuex'

const router = useRouter();
const route = useRoute();
const store = useStore()
const userRole = computed(() => store.getters["roleObj"]);
const ifStudent = computed(() => userRole.value.isStudent);
const ifTeacher = computed(() => userRole.value.isTeacher);
const ifAdmin = computed(() => userRole.value.isAdmin);
const {
  query: { classId, major, studentId },
} = route;
// Dom 挂载之后
onMounted(() => {
  const param = {
    // id: "",
    major: major,
    studnetId: studentId,
    // studentId:studentId
    // needed: 0,
    // remark: '',
    // stage: activeStage.value,
    // teacherId: "",
    // upi: "",
  };
  getrecordList(param);
});
// 用户数据
let tableData = ref([]);
let total = ref(0);
// 搜索条件
const searchForm = reactive({
  current: 1,
  size: 10,
  name: "",
});

const getrecordList = (param) => {
  userApi.getrecordList(param).then((res) => {
    tableData.value = res.data;
  });
};
const handleSizeChange = (size) => {
  searchForm.size = size;
  getUserList();
};
const handleCurrentChange = (current) => {
  searchForm.current = current;
  getUserList();
};

// 删除用户
const deleteUser = (id) => {
  ElMessageBox.confirm("delete this application?", {
    confirmButtonText: "sure",
    cancelButtonText: "cancel",
    type: "warning",
  })
    .then(async () => {
      userApi.deleteRecord(id).then((res) => {
        if (res.data.resultCode == "success") {
          ElMessage.success("delete success!");
          const param = {
            major: major,
            studnetId: studentId,
          };
          getrecordList(param);
        }
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "cancel",
      });
    });
};
const agreeUser = (id) => {
  ElMessageBox.confirm("agree this application?", {
    confirmButtonText: "sure",
    cancelButtonText: "cancel",
    type: "success",
  })
    .then(async () => {
      userApi.agreeRecord(id).then((res) => {
        if (res.data.resultCode == "success") {
          ElMessage.success("success!");
          const param = {
            major: major,
            studnetId: studentId,
          };
          getrecordList(param);
        }
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "cancel",
      });
    });
};
</script>

<style lang="scss" scoped>
</style>