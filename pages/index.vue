<template>
  <div>
    <!-- <div>docPageDataShort</div>
      <div v-for="(element,index) in docPageDataShort" :key="index">
        <div>{{element}}</div>
      </div>
    <div>docPageData</div>
      <div v-for="(element,index) in docPageData" :key="index">
        <div>{{element}}</div>
    </div> -->
    <DocPageData/>
  </div>
</template>

<script lang="ts">
import { data } from 'browserslist'
import Vue from 'vue'
import {docPageDataShort, docPageData} from './documentPageData/data'
import DocPageData from "~/components/DocPageData";

export default Vue.extend({
  name: 'IndexPage',
  components:{
    DocPageData
  },
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
