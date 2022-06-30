<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
const formRef = ref<FormInstance>()
const form = reactive({
  username: '',
  password: '',
})
const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
})
const activeName = ref('tab1')

const handleClick = () => { }

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid, fields) => {
    if (valid)
      ElMessage.success('提交成功')

    else
      ElMessage.error('提交失败')
  })
}
</script>

<template>
  <div w-full h-full flex="~" justify-center>
    <el-form
      ref="formRef" :model="form" :rules="rules"
      class="login-form" mt-50 size="large"
    >
      <el-tabs v-model="activeName" class="form-tabs" @tab-click="handleClick">
        <el-tab-pane label="账号密码登录" name="tab1">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="密码">
              <template #prefix>
                <el-icon>
                  <div i-ep-user />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password" type="password"
              placeholder="密码"
              show-password
            >
              <template #prefix>
                <el-icon>
                  <div i-ep-lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
        </el-tab-pane>
        <!-- <el-tab-pane label="手机号登录" name="tab2">
          暂无
        </el-tab-pane> -->
      </el-tabs>

      <el-form-item>
        <el-button type="primary" w-full @click="submitForm(formRef)">
          确定
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-form {
  .form-tabs {
    width: 368px;

    ::v-deep(.el-tabs__nav-scroll) {
      display: flex;
      justify-content: center;
    }

    ::v-deep(.el-tabs__nav-wrap::after) {
      background-color: transparent !important;
    }
  }
}
</style>
