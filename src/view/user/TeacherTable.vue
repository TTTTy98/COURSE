<template>
      <el-dialog v-model="dialogTableVisible" title="Shipping address">

    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogTableVisible  = false">
          Confirm
        </el-button>
      </span>
    </template>

  </el-dialog>
    
  </template>
  <script setup>
  </script>
  <style scoped>
  </style>
  