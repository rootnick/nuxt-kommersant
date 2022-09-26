<template>
  <div>
    morozov
    <!-- <div v-for="(element, index) in elements" :key="index">
      <element-render :element="element" />
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { docPageData, docPageDataShort } from '~/static/data'

export default Vue.extend({
  name: 'IndexPage',
  asyncData({ query }) {
    if (Object.hasOwn(query, 'short')) {
      return docPageDataShort
    }
    return docPageData
  },
  computed:{
    dataDocBodyElements(){
      return this.data.content.docBodyElements
    }
  }
})
</script>
