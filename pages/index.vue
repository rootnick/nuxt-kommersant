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
  name: 'IndexPage',
  async asyncData({ $http }) {
    const elements = await $http.$get('/api/docPageDataShort')
    return { elements }
  },
})
</script>
