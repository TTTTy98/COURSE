<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="'large'"
    status-icon
    style="margin-top: 50px"
  >
    <el-row>
      <el-col :span="12">
        <el-form-item label="major" prop="major">
          <el-input :disable="readOnly" v-model="ruleForm.major" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="needed" prop="needed">
          <el-input
            :disable="readOnly"
            v-model="ruleForm.needed"
            type="number"
          />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="remark" prop="remark">
          <el-input :disable="readOnly" v-model="ruleForm.remark" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="stage" prop="stage">
          <el-input :disable="readOnly" v-model="ruleForm.stage" />
        </el-form-item>
      </el-col>
     
    </el-row>

    <div
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <el-button @click="resetForm(ruleFormRef)">Back</el-button>
      <el-button type="primary" @click="submitCourse(ruleForm)">
        Submit
      </el-button>
    </div>
  </el-form>
</template>
      
      <script setup>
import { onMounted, reactive, ref } from "vue";
import uploadCourseFile from "../../components/uploadCourseFile.vue";
import { useRoute, useRouter } from "vue-router";
import gradeList from "../CourseForm/components/gradeList.vue";
import userApi from "../../api/user";
import { ElMessage } from "element-plus";
const props = defineProps({
  readOnly: {
    type: Boolean,
    require: false,
    default: false,
  },
});
const router = useRouter();
const route = useRoute();
//   const {
//     query: { courseId, major },
//   } = route;
const courseId = ref("");
const formSize = ref("default");
const ruleFormRef = ref({});
const ruleForm = ref({});
const rules = reactive({
  major: [{ required: true, message: "Please input", trigger: "blur" }],
  needed: [
    { required: true, message: "Please input", trigger: "blur" },
    {
      pattern: /^\d*$/,
      message: "Please enter an integer",
      trigger: "blur",
    },
  ],
  remark: [{ required: true, message: "Please input", trigger: "blur" }],
  stage: [{ required: true, message: "Please input", trigger: "blur" }],
  stage: [{ required: true, message: "Please input", trigger: "blur" }],
  teacherId: [{ required: true, message: "Please input", trigger: "blur" }],
  upi: [{ required: true, message: "Please input", trigger: "blur" }],
});

const submitCourse = async (ruleForm) => {
  if (!ruleForm) return;
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      userApi.classSave(ruleForm).then((res) => {
        ElMessage.success("Success!");
        router.push("/user/CourseManagement");
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};
const chooseGrade = (e) => {
  ruleForm.grade = e;
};
const resetForm = () => {
  router.push("/user/CourseManagement");
};
onMounted(() => {
  courseId.value = route.query.courseId;

  if (courseId.value) {
    userApi.getClassDetail(courseId.value).then((res) => {
      ruleForm.value = res.data;
      console.log(ruleForm.value);
    });
  }
});
</script>
      
      <style  scoped>
.flex-box {
  display: flex;
  align-items: center;
}
.short {
  width: 100px;
}
.grade-list-box {
  width: 400px;
  margin: 12px 24px;
}
</style>