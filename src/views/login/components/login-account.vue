<template>
  <div class="login-account">
    <el-form ref="formRef" :model="account" :rules="rules" label-width="60px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'

export default defineComponent({
  setup () {
    // 表单数据
    const account = reactive({
      name: '',
      password: ''
    })
    // 表单实例
    const formRef = ref<InstanceType<typeof ElForm>>()

    // 登录
    const loginAccount = () => {
      // eslint-disable-next-line no-unused-expressions
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('登录')
        } else {
          console.log('填写错误')
        }
      })
    }
    return {
      account,
      rules,
      formRef,
      loginAccount
    }
  }
})
</script>

<style scoped></style>
