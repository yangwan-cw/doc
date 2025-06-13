<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { toggleDark } from './Dark'

import GiscusComment from './GiscusComment.vue' // 评论模块
const { isDark } = useData()
// 实现切换主题过渡动画
toggleDark(isDark)
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <GiscusComment />
    </template>
  </DefaultTheme.Layout>
</template>