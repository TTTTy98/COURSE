<template>
  <el-table :data="tableData" height="200" border>
    <el-table-column width="100" align="center">
      <template #default="scope">
        <el-radio
          v-model="radio"
          :label="scope.row.label"
          @input="tableCurrentChange(scope.row)"
          >&nbsp;</el-radio
        > 
      </template>
    </el-table-column>
    <el-table-column align="center" prop="label" label="grade" width="300" >
      <template #default="scope">
       <span class="grade-word">
{{ scope.row.label }}
       </span>
      </template></el-table-column>
  </el-table>
</template>
  
  <script   setup>
import { ref } from "vue";
const radio = ref("");
const tableCurrentInfo = ref({});
const tableData = ref([
  {
    value: "6",
    label: "A+",
  },
  {
    value: "5",
    label: "A",
  },
  {
    value: "4",
    label: "A-",
  },
  {
    value: "3",
    label: "A+",
  },
  {
    value: "2",
    label: "A",
  },
  {
    value: "1",
    label: "A-",
  },
 
  {
    value: "0",
    label: "No Grade",
  },
]);
const emits = defineEmits(["chooseGrade"]);
const tableCurrentChange = (row) => {
  tableCurrentInfo.value = row;
  emits("chooseGrade", row.value);
};
</script>

<style lang="scss" scoped>
.grade-word{
  display: inline-block;
  width:30px;
  text-align: left;
}
</style>