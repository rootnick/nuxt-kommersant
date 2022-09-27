<template>
  <p>{{ text }}</p>
</template>

<script lang='ts'>
import Vue from 'vue'
import type { ArticleLong } from '~/static/types'

export default Vue.extend({
  name: 'simpleText',
  props: {
    text: {
      type: String as () => ArticleLong.PlainTextElement,
      required: true,
    },
  },
})
</script>