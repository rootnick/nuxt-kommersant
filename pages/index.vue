<template>
  <div>test</div>
</template>

<script lang="ts">
import { data } from 'browserslist'
import Vue from 'vue'
import {docPageData} from './documentPageData/data'

export default Vue.extend({
  name: 'IndexPage',
  mounted() {
      console.log(docPageData.data.content.docBodyElements.filter(element => element.widgetType === 'para'))
  },
  
})
</script>
