<script lang='ts'>
import Vue from 'vue'
import type { ArticleLong } from '~/static/types'

export default Vue.extend({
  name: 'simpleText',
  render() {
    // @ts-ignore:next-line
    return this._v(this.text)
  },
  props: {
    text: {
      type: String as () => ArticleLong.PlainTextElement,
      required: true,
    },
  },
})
</script>