<template>
  <div>docPageDataShort</div>
</template>

<script lang="ts">
import { data } from 'browserslist'
import Vue from 'vue'
import {docPageDataShort, docPageData} from './documentPageData/data'

export default Vue.extend({
  name: 'IndexPage',
  computed:{
    docPageDataShort(){
      return docPageDataShort.data.content.docBodyElements
    },
    docPageData(){
      return docPageData.data.content.docBodyElements
    }

  }
  
})
</script>
