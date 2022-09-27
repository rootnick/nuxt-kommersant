<template>
  <div>
    <div v-for="(element, index) in docBodyElements" :key="index">
      {{ defineWidgetType(element) }}
      <!-- <component :is="defineWidgetType(element)"></component> -->
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import defaultWidgetType from '~/components/widgetTypes/defaultWidgetType.vue'
import { docPageData, docPageDataShort } from '~/static/data'
import type { ArticleLong } from '~/static/types'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    defaultWidgetType,
  },
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
  methods: {
    defineWidgetType(element: ArticleLong.DocBodyElement) {
      //
    },
  },
})
</script>
