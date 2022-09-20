<template>
  <div>
    <div v-for="(element,index) in elements" :key="index">
      
    </div>
  </div>
</template>

<script lang="ts">
import { data } from 'browserslist'
import Vue from 'vue'

export default Vue.extend({
  name: "IndexPage",
  async asyncData({ $http }) {
    const elements = await $http.$get('/api/docPageDataShort')
    return { elements }
  }

})
</script>
