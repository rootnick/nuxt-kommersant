<template>
  <div>
    {{users}}
  </div>
</template>

<script lang="ts">
import { data } from 'browserslist'
import Vue from 'vue'

export default Vue.extend({
  name: "IndexPage",
  async asyncData({ $http }) {
    const test = await $http.$get('/api/docPageDataShort')
    return { users: test }
  }

})
</script>
