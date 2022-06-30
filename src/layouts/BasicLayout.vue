<!--
 * @Author: basd1995
 * @Date: 2022-06-27 21:29:06
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-30 14:25:41
-->
<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
</script>

<template>
  <el-container w-full h-full>
    <div h-full>
      <div h-60px bg-red-400>
        logo
      </div>
      <el-scrollbar>
        <Sidebar />
      </el-scrollbar>
    </div>
    <el-container>
      <el-header bg-blue-300>
        <Header />
      </el-header>
      <el-main border-l-1 border-gray-100>
        <div>Main</div>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>
