<template>
  <div>
    <el-icon :size="20" color="black" @click="switchIcon">
      <Fold v-if="Icon"/>
      <Expand v-else></Expand>
    </el-icon>
    header

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup (props, { emit }) {
    /**
     * 侧边栏折叠点击
     */
    const Icon = ref(true)
    const switchIcon = () => {
      Icon.value = !Icon.value
      emit('foldChange', Icon.value)
    }
    return {
      Icon,
      switchIcon
    }
  }
})
</script>

<style lang="less" scoped>

</style>
