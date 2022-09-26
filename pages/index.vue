<template>
  <fragment>
    <div v-for="(element, index) in docBodyElements" :key="index">
      {{ element }}
    </div>
  </fragment>
</template>

<script lang='ts'>
import Vue from 'vue'
import { docPageData, docPageDataShort } from '~/static/data'
import type { ArticleLong } from '~/static/types'

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
