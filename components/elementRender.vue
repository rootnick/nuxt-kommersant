<template>
  <div>
    <div v-if="isPara">
      <text-render :body-elements="element.bodyElements" />
    </div>
    <div v-else class="element_render_text">
      WidgetElement {{ element.widgetType }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementRender',
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isPara() {
      return this.element.widgetType == 'para'
    },
  },
}
</script>
<style>
.element_render_text {
  color: red;
}
</style>
