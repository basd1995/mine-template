<!--
 * @Author: basd1995
 * @Date: 2022-06-27 21:29:06
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-28 14:57:25
-->
<script setup lang="ts">

</script>

<template>
  <el-container w-full h-full>
    <div bg-red-500>
      <Menu />
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
