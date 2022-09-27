<template>
  <p class="defaultWidgetType_render_text">WidgetElement <slot /></p>
</template>
<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'defaultWidgetType',
})
</script>
<style>
.defaultWidgetType_render_text {
  color: red;
}
</style>
