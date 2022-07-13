<template>
  <div class="login">
    <loginPanel></loginPanel>
  </div>
</template>

<script lang="ts">
import loginPanel from '@/views/login/components/login-panel.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'login',
  components: {
    loginPanel
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
