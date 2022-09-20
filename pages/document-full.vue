<template>
    <div>
        <div v-for="(element,index) in elements" :key="index">
            {{element.widgetType}}
            <element-render :element="element" />
        </div>
    </div>
</template>
  
<script lang="ts">
import { data } from 'browserslist'
import Vue from 'vue'

export default Vue.extend({
    name: "documentFull",
    async asyncData({ $http }) {
        const elements = await $http.$get('/api/docPageData')
        return { elements }
    }

})
</script>
  