<template>
  <div>{{ tagName }}</div>
</template>
<script lang='ts'>
import Vue from 'vue'
import type { ArticleLong } from '~/static/types'

export default Vue.extend({
  name: 'tagComponent',
  props: {
    tagName: {
      type: String as Extract<ArticleLong.HTMLTagElement, 'tagName'>,
      required: true,
    },
    attributes: {
      type: Object as Extract<ArticleLong.HTMLTagElement, 'attributes'>,
      required: false,
    },
    children: {
      type: Array as Extract<ArticleLong.HTMLTagElement, 'children'>,
      required: false,
    },
  },
})
</script>