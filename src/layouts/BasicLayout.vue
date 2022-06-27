<!--
 * @Author: basd1995
 * @Date: 2022-06-27 21:29:06
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-28 00:32:06
-->
<template>
  <el-container>
    <el-aside width="200px" bg-gray-500>
      Aside
    </el-aside>
    <el-container>
      <el-header bg-blue-300>
        Header
        <button btn @click="goPage('/workplace')">
          Workplace页面
        </button>
        <button btn @click="goPage('/user')">
          User页面
        </button>
        <button btn @click="goPage('/hello-world')">
          HelloWorld页面
        </button>
      </el-header>
      <el-main>
        <div>Main</div>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>
