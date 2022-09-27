<template>
  <div>{{ type() }}</div>
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
  methods: {
    type() {
      if (this.element instanceof String) {
        console.log('string')
      } else if ((this.element as ArticleLong.WidgetElement).widgetType) {
        console.log('widgetType')
      } else if ((this.element as ArticleLong.HTMLTagElement).tagName) {
        console.log('tagName')
      }
    },
  },
})
</script>
