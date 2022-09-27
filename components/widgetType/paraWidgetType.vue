<template>
  <p class="doc__text">
    <template v-for="(element, index) in bodyElements">
      <simpleText :key="index" :text="element"/>
    </template>
  </p>
</template>
<script lang='ts'>
import Vue from 'vue'
import type { ArticleLong } from '~/static/types'
import simpleText from '~/components/simpleText.vue'
export default Vue.extend({
  name: 'paraWidgetType',
  components: {
    simpleText,
  },
  props: {
    bodyElements: {
      type: Array as () => ArticleLong.DocBodyElement[],
      required: true,
    },
  },
})
</script>
