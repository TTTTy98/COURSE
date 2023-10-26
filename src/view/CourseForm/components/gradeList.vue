<template>
  <el-table :data="tableData" height="250" border>
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
    <el-table-column align="center" prop="value" label="label" width="300" />
  </el-table>
</template>
  
  <script   setup>
import { ref } from "vue";
const radio = ref("");
const tableCurrentInfo = ref({});
const tableData = ref([
  {
    value: "A+",
    label: "A+",
  },
  {
    value: "A",
    label: "A",
  },
  {
    value: "A-",
    label: "A-",
  },
  {
    value: "B+",
    label: "B+",
  },
  {
    value: "B",
    label: "B",
  },
  {
    value: "B-",
    label: "B-",
  },
  {
    value: "C+",
    label: "C+",
  },
  {
    value: "C",
    label: "C",
  },
  {
    value: "C-",
    label: "C-",
  },
  {
    value: "C-",
    label: "C-",
  },
  {
    value: "No Grade",
    label: "No Grade",
  },
]);
const emits = defineEmits(["chooseGrade"]);
const tableCurrentChange = (row) => {
  tableCurrentInfo.value = row;
  emits("chooseGrade", row.value);
};
</script>