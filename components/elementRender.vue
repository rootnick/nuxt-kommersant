<template>
  <div>
    <div v-if="isPara">
      <p class=”doc__text” v-for="(bodyElement,index) in element.bodyElements" :key="index">
        <body-element-render :bodyElement="bodyElement" />
      </p>
    </div>
    <div v-else class="element_render_text">
      WidgetElement {{element.widgetType}}
    </div>
  </div>

</template>

<script>
import { computed } from 'vue';

export default {
  name: 'elementRender',
  props: {
    element: {
      type: Object,
      required: true
    }
  },
  computed: {
    isPara() {
      return this.element.widgetType == 'para' ? true : false
    }
  }
}
</script>
<style>
.element_render_text {
  color: red
}
</style>