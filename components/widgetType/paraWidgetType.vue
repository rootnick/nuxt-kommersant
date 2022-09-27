<template>
  <div>para</div>
</template>
<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'paraWidgetType',
  props: {
    bodyElements: {
      type: Array,
      required: false,
    },
  },
})
</script>