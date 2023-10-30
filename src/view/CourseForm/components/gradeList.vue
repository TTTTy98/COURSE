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
    <el-table-column align="center" prop="value" label="grade" width="300" />
  </el-table>
</template>
  
  <script   setup>
import { ref } from "vue";
const radio = ref("");
const tableCurrentInfo = ref({});
const tableData = ref([
  {
    value: "6",
    label: "a+",
  },
  {
    value: "5",
    label: "a",
  },
  {
    value: "4",
    label: "a-",
  },
  {
    value: "3",
    label: "b+",
  },
  {
    value: "2",
    label: "b",
  },
  {
    value: "1",
    label: "b-",
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