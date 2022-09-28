<template>
  <component :is="typeComponent" :bodyElements="element.bodyElements">{{
    element.widgetType
  }}</component>
</template>
<script lang='ts'>
import Vue from 'vue'
import type { ArticleLong } from '~/static/types'
import paraWidgetType from './widgetType/paraWidgetType.vue'
import defaultWidgetType from './widgetType/defaultWidgetType.vue'
export default Vue.extend({
  name: 'widgetType',
  components: {
    paraWidgetType,
    defaultWidgetType,
  },
  props: {
    element: {
      type: Object as () => ArticleLong.DocBodyElement,
      required: true,
    },
  },
  computed: {
    typeComponent() {
      let nameComponent = 'default'
      if (this.element as ArticleLong.WidgetElement) {
        if ((this.element as ArticleLong.WidgetElement).widgetType === 'para') {
          nameComponent = 'para'
        }
      }
      return `${nameComponent}WidgetType`
    },
  },
})
</script>
