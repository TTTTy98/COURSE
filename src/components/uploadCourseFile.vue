<template>
  <div class="upload-box">
    <el-upload
    class="upload-demo"
    drag
    :before-upload="beforeAvatarUpload"
    :show-file-list="true"
    :action=url
    multiple
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    
  </el-upload>
  </div>
</template>
  
  <script setup>
import { ref,computed } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";

const randomNum =ref(Math.floor(Math.random()*1000))
const url =`https://82066id128.yicp.fun/upload?fileType=1&resourceId=${ randomNum.value }`
const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== "application/pdf") {
    ElMessage.error("pdf only!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
};
</script>
  
  <style scoped>
  .upload-box{
    width: 90%;
    margin:20px;
    box-sizing: border-box;
  }
  .avatar-uploader{
    width: 100%;
    
  }
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
  margin: auto;
}
</style>
  
  <style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>