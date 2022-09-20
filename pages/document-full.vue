<template>
    <div>
        docPageMorozov
    </div>
</template>
  
<script lang="ts">
import { data } from 'browserslist'
import Vue from 'vue'

export default Vue.extend({
    name: "documentFull",
    async asyncData({ $http }) {
        const test = await $http.$get('/api/docPageData')
        return { users: test }
    }

})
</script>
  