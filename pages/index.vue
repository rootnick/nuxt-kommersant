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
  computed: {
    isShort() {
      return Object.hasOwn(this.$route.query, 'short')
    },
  },
})
</script>
