<template>
  <p class="doc__text">
    <span v-for="(element, index) in bodyElements" :key="index">
      {{ element }}
    </span>
  </p>
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