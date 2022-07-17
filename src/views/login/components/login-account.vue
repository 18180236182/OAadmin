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
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

export default defineComponent({
  setup () {
    // 表单数据
    const account = reactive({
      name: localCache.getCache('name'),
      password: localCache.getCache('password')
    })
    // 表单实例
    const formRef = ref<InstanceType<typeof ElForm>>()

    const Store = useStore()
    // 登录
    const _loginAccount = (isKeepPassword: boolean) => {
      // eslint-disable-next-line no-unused-expressions
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('登录')
          // 记住密码
          if (isKeepPassword) {
            // 本地缓存用户名和密码
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          Store.dispatch('login/accountLoginAction', { ...account })
        } else {
          console.log('填写错误')
        }
      })
    }
    return {
      account,
      rules,
      formRef,
      _loginAccount
    }
  }
})
</script>

<style scoped></style>
