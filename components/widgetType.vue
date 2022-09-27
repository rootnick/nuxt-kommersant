<template>
  <div>{{ element }}</div>
</template>
<script lang='ts'>
import Vue from 'vue'
import type { ArticleLong } from '~/static/types'
export default Vue.extend({
  name: 'widgetType',
  props: {
    element: {
      type: Object as () => ArticleLong.DocBodyElement,
      required: true,
    },
  },
})
</script>
