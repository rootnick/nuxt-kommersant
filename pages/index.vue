<template>
  <div>
    morozov
    <!-- <div v-for="(element, index) in elements" :key="index">
      <element-render :element="element" />
    </div> -->
  </div>
</template>

<script lang='ts'>
import { docPageData, docPageDataShort } from '~/static/data'
import type { ArticleLong } from '~/static/types'
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  async asyncData({ route }) {
    if (Object.hasOwn(route.query, 'short')) {
      return docPageDataShort
    }
    return docPageData
  },
  data() {
    return {} as ArticleLong.IArticleLong
  },
  computed: {
    docBodyElements(): ArticleLong.DocBodyElement[] {
      return this.data.content.docBodyElements
    },
  },
})
</script>
