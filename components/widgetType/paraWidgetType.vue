<template>
  <p class="doc__text">para</p>
</template>
<script lang='ts'>
import Vue from 'vue'
import type { ArticleLong } from '~/static/types'

export default Vue.extend({
  name: 'paraWidgetType',
  props: {
    bodyElements: {
      type: Array as () => ArticleLong.DocBodyElement[],
      required: true,
    },
  },
})
</script>