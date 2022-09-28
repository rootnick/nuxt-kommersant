<template>
  <p class="doc__text">
    <template v-for="(element, index) in bodyElements">
      <tagComponent
        v-if="isTag(element)"
        :key="index"
        :tagName="element.tagName"
        :attributes="element.attributes"
        :children="element.children"
      />
      <simpleText v-else :key="index" :text="element" />
    </template>
  </p>
</template>
<script lang='ts'>
import Vue from 'vue'
import type { ArticleLong } from '~/static/types'
import simpleText from '~/components/simpleText.vue'
import tagComponent from '~/components/tagComponent.vue'
export default Vue.extend({
  name: 'paraWidgetType',
  components: {
    simpleText,
    tagComponent,
  },
  props: {
    bodyElements: {
      type: Array as () => ArticleLong.DocBodyElement[],
      required: true,
    },
  },
  methods: {
    isTag(element: ArticleLong.DocBodyElement) {
      if ((element as ArticleLong.HTMLTagElement).tagName) {
        return true
      }
      return false
    },
  },
})
</script>
