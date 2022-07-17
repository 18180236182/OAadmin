<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>

    <el-tabs stretch type="border-card">
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef"/>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone/>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="_handleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup () {
    // 记住密码
    const isKeepPassword = ref<boolean>(true)
    // ts: 获取到子组件的类型 <InstanceType<typeof 子组件名称>>
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    // 登录点击
    const _handleLoginClick = () => {
      // 调用子组件方法
      // eslint-disable-next-line no-unused-expressions
      accountRef.value?._loginAccount(isKeepPassword.value)
    }

    // 记住密码
    return {
      isKeepPassword,
      accountRef,
      _handleLoginClick
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
