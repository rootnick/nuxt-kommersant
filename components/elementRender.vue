<!-- Please remove this file from your project -->
<template>
  <div>
    <p class=”doc__text” v-if="isPara">
      {{element.bodyElements}}
    </p>
    <p class="element_render_text" v-else>WidgetElement {{element.widgetType}}</p>
    <div>------</div>
  </div>

</template>

<script>
import { computed } from 'vue';

export default {
  name: 'elementRender',
  props: {
    element: {
      type: Object
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