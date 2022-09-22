<template>
  <div>
    <div v-for="(element, index) in elements" :key="index">
      <element-render :element="element" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DocumentFull',
  async asyncData({ $http }) {
    const elements = await $http.$get('/api/docPageData')
    return { elements }
  },
})
</script>
