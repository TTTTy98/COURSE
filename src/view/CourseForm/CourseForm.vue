<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-row>
      <el-col :span="12">
        <el-form-item label="Name" prop="name">
          <el-input :disable="readOnly" v-model="ruleForm.name" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Upi" prop="upi">
          <el-input :disable="readOnly" v-model="ruleForm.upi" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="Email" prop="email">
          <el-input :disable="readOnly" type="email" v-model="ruleForm.email" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Phone" prop="phone">
          <el-input
            :disable="readOnly"
            type="number"
            v-model="ruleForm.phone"
          />
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item
      label-width="250"
      label="Are you a offshore student?"
      prop="offshore"
    >
      <el-radio-group :disable="readOnly" v-model="ruleForm.offshore">
        <el-radio label="Yes" value="1" />
        <el-radio label="No" value="0" />
      </el-radio-group>
    </el-form-item>

    <el-form-item label-width="120" label="Study type" prop="studyType">
      <el-radio-group :disable="readOnly" v-model="ruleForm.studyType">
        <el-radio label="Under" value="0" />
        <el-radio label="Past" value="1" />
        <el-radio label="Docton" value="2" />
      </el-radio-group>
    </el-form-item>

    <el-form-item label="What is your GPA?" label-width="160" prop="gpa">
      <el-input :disable="readOnly" class="short" v-model="ruleForm.gpa" />
    </el-form-item>

    <el-row>
      <el-col :span="12">
        <uploadCourseFile />
      </el-col>
      <el-col :span="12">
        <uploadCourseFile />
      </el-col>
    </el-row>

    <el-form-item label="Your grade when taken" label-width="400" prop="grade">
      <div class="grade-list-box"><gradeList @chooseGrade="chooseGrade" /></div>
    </el-form-item>
    <el-form-item
      label="Explanation if no grade"
      label-width="400"
      prop="explanation"
    >
      <!--TODO v-if="isReadOnly || ruleForm.grade === ???" -->
      <el-input type="textarea" :disable="readOnly" v-model="ruleForm.hours" />
    </el-form-item>

    <el-form-item
      label="How many courses do you have this season?"
      label-width="400"
      prop="courses"
    >
      <el-input :disable="readOnly" class="short" v-model="ruleForm.courses" />
    </el-form-item>

    <el-form-item
      label="Max work hour per week?"
      label-width="400"
      prop="hours"
    >
      <el-input :disable="readOnly" class="short" v-model="ruleForm.hours" />
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm(ruleFormRef)">Back</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </el-button>
    </el-form-item>
  </el-form>
</template>
  
  <script setup>
import { reactive, ref } from "vue";
import uploadCourseFile from "../../components/uploadCourseFile.vue";
import { useRoute, useRouter } from "vue-router";
import gradeList from "../CourseForm/components/gradeList.vue";
const props = defineProps({
  readOnly: {
    type: Boolean,
    require: false,
    default: false,
  },
});
const router = useRouter();
const route = useRoute();
const {
  query: { courseId },
} = route;
const formSize = ref("default");
const ruleFormRef = ref();
const ruleForm = reactive({});

const rules = reactive({
  name: [{ required: true, message: "Please input", trigger: "blur" }],
  upi: [{ required: true, message: "Please input", trigger: "blur" }],
  email: [{ required: true, message: "Please input", trigger: "blur" }],
  phone: [{ required: true, message: "Please input", trigger: "blur" }],
});

const submitForm = async (formEl) => {
  console.log(courseId); // get CourseId
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
const chooseGrade = (e) => {
  ruleForm.grade = e;
};
const resetForm = (formEl) => {
  router.push(-1);
  // if (!formEl) return;
  // formEl.resetFields();
};
</script>
  
  <style  scoped>
.flex-box {
  display: flex;
  align-items: center;
}
.short {
  width: 60px;
}
.grade-list-box {
  width: 400px;
  margin: 12px 24px;
}
</style>