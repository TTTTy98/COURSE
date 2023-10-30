<template>
  <div>
    <el-card>
      <slot name="header">
        <div class="header">
          <el-button class="course-btn" @click="addCourse">add</el-button>
        </div>
      </slot>
      <el-table :data="listData" border style="width: 100%; margin-top: 20px">
        <el-table-column prop="major" label="major" width="180" />
        <el-table-column prop="needed" label="needed" width="180" />
        <el-table-column prop="remark" label="remark" width="180" sortable />
        <el-table-column prop="stage" label="stage" width="180" sortable />
        <el-table-column prop="teacherId" label="teacherId" width="180" />
        <el-table-column prop="upi" label="upi" width="180" />
        <el-table-column label="operate" width="300">
          <template #default="scope">
            <el-button
              type="success"
              size="small"
              @click="editCourse(scope.row.id)"
              >edit</el-button
            >
            <el-button
              type="danger"
              size="small"
              @click="delCourse(scope.row.id)"
              >delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
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
import { onMounted, reactive, ref, computed } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();
const listData = ref([]);
const total = ref(0)
const searchForm = ref({
  size: 10,
  current: 0,
});
// const userRole = computed(() => store.getters["roleObj"]);
const {
  query: { classId, major, studentId },
} = route;

const handleSizeChange = (size) => {
  searchForm.value.size = size;
  dataQuery();
};
const handleCurrentChange = (current) => {
  searchForm.vale.current = current;
  dataQuery();
};
const dataQuery = () => {
  userApi.getClassList({}).then((res) => {
    listData.value = res.data;
    total.value = res.data.length||0
  });
};
const addCourse = () => {
  router.push({ name: "CourseDetail" });
};
const delCourse = (id) => {
  userApi.classDel(id).then((res) => {
    ElMessage.success("success!");
  });
};
const editCourse = (id) => {
  router.push({
    name: "CourseDetail",
    query: {
      courseId: id,
    },
  });
};
onMounted(() => {
  dataQuery();
  console.log("listData", listData.value);
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: end;
  align-items: center;
  .course-btn {
    margin: 0 20px;
  }
}
</style>