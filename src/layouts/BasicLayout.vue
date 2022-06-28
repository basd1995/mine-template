<!--
 * @Author: basd1995
 * @Date: 2022-06-27 21:29:06
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-28 23:46:04
-->
<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
</script>

<template>
  <el-container w-full h-full>
    <div h-full>
      <el-scrollbar>
        <Sidebar />
      </el-scrollbar>
    </div>
    <el-container>
      <el-header bg-blue-300>
        <Header />
      </el-header>
      <el-main>
        <div>Main</div>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>
