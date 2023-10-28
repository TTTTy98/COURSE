<template>

  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="large"
    status-icon
  >
    <el-row>
      <el-col :span="12">
        <el-form-item label="Name" prop="studentName">
          <el-input :disable="readOnly" v-model="ruleForm.studentName" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Upi" prop="studentId">
          <el-input :disable="readOnly" v-model="ruleForm.studentId" />
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
      <el-col :span="12">
        <el-form-item
      label-width="250"
      label="Are you a offshore student?"
      prop="offshoreStudent"
    >
      <el-radio-group :disable="readOnly" v-model="ruleForm.offshoreStudent">
        <el-radio label="Yes" value="1" />
        <el-radio label="No" value="0" />
      </el-radio-group>
    </el-form-item>
      </el-col>
      <el-col :span="12">
        
    <el-form-item label-width="120" label="Study type" prop="studyType">
      <el-radio-group :disable="readOnly" v-model="ruleForm.studyType">
        <el-radio label="undergraduate" value="undergraduate" />
        <el-radio label="postgraduate" value="postgraduate" />
        <el-radio label="doctor" value="doctor" />
      </el-radio-group>
    </el-form-item>
      </el-col>

      <el-col :span="24">
      
    <el-form-item label="What is your GPA?" label-width="200" prop="gpa">
      <el-input :disable="readOnly" class="short"  type="number"  v-model="ruleForm.gpa" />
    </el-form-item></el-col>

    <el-col :span="12">
      <el-text class="mx-1" type="info" style="margin-left: 20px;">Upload CV(PDF only)</el-text>
        <uploadCourseFile />
      </el-col>
      <el-col :span="12">
        <el-text class="mx-1" type="info" style="margin-left: 20px;">Academic Transcript upload（ PDF only）</el-text>
        <uploadCourseFile />
      </el-col>
      <el-col :span="12">
      <el-form-item label="Your grade when taken" label-width="200" prop="grade">
      <div class="grade-list-box"><gradeList @chooseGrade="chooseGrade" /></div>
    </el-form-item>
  </el-col>
  <el-col :span="12">
    <el-form-item
      label="previousExperience"
      label-width="200"
      prop="previousExperience"
    >
      <!--TODO v-if="isReadOnly || ruleForm.grade === ???" -->
      <el-input type="textarea" :disable="readOnly" v-model="ruleForm.previousExperience" />
    </el-form-item>
  </el-col>
  <el-col :span="12">
    <el-form-item
      label="How many courses do you have this season?"
      label-width="400"
      prop="courses"
    >
      <el-input :disable="readOnly" class="short" type="number" v-model="ruleForm.courses" />
    </el-form-item>
  </el-col>

  <el-col :span="12">
    <el-form-item
      label="Max work hour per week?"
      label-width="200"
      prop="maxWorkload"
    >
      <el-input :disable="readOnly" class="short" type="number" v-model="ruleForm.maxWorkload" />
    </el-form-item>
  </el-col>
 
    </el-row>

   


    


  
    <div style="position: absolute;left: 50%;transform: translate(-50%);margin-top: 30px;">
      <el-button @click="resetForm(ruleFormRef)">Back</el-button>
      <el-button type="primary" @click="submitForm(ruleForm)">
        Submit
      </el-button>
    </div>
  </el-form>

</template>
  
  <script setup>
import { reactive, ref } from "vue";
import uploadCourseFile from "../../components/uploadCourseFile.vue";
import { useRoute, useRouter } from "vue-router";
import gradeList from "../CourseForm/components/gradeList.vue";
import userApi from '../../api/user'
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
const {
  query: { classId,major },
} = route;
const formSize = ref("default");
const ruleFormRef = ref();
const ruleForm = reactive({});

const rules = reactive({
  studentName: [{ required: true, message: "Please input", trigger: "blur" }],
  studentId: [{ required: true, message: "Please input", trigger: "blur" }],
  email: [{ required: true, message: "Please input", trigger: "blur" }],
  phone: [{ required: true, message: "Please input", trigger: "blur" }],
});

const submitForm = async (ruleForm) => {
  ruleForm.classId=classId;
  ruleForm.major=major;
  ruleForm.offshoreStudent =  ruleForm.offshoreStudent=='Yes'?1:0
  if (!ruleForm) return;
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      userApi.recordSave(ruleForm).then(res=>{
        ElMessage.success('Success!');
        router.push('/index');
    })
  
    } else {
      console.log("error submit!", fields);
    }
  });
};
const chooseGrade = (e) => {
  ruleForm.grade = e;
};
const resetForm = () => {
  
    router.push('/index');
};
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