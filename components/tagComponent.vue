<script lang='ts'>
import Vue from 'vue'
import type { ArticleLong } from '~/static/types'
import simpleText from '~/components/simpleText.vue'

type tagName = Extract<ArticleLong.HTMLTagElement, 'tagName'>
type attributes = Extract<ArticleLong.HTMLTagElement, 'attributes'>
type children = Extract<ArticleLong.HTMLTagElement, 'children'>

export default Vue.extend({
  name: 'tagComponent',
  components: {
    simpleText,
  },
  render: function (createElement, tagComponent) {
    return createElement(
      String(this.tagName),
      // @ts-ignore:next-line
      { attrs: { ...this.attributes } },
      // @ts-ignore:next-line
      this.renderChild(createElement, tagComponent)
    )
  },
  methods: {
    renderChild(h: any, tagComponent: any) {
      let child
      if (this.children && Array.isArray(this.children)) {
        child = this.children.map((child) => {
          if (!Array.isArray(child)) {
            return h(simpleText, {
              props: { text: child },
            })
          } else {
            return h(tagComponent(), {
              props: {
                // @ts-ignore:next-line
                tagName: String(child.tagName),
                // @ts-ignore:next-line
                attributes: child.attributes,
                // @ts-ignore:next-line
                children: child.children,
              },
            })
          }
        })
      }
      return child
    },
  },
  props: {
    tagName: {
      type: String as tagName,
      required: true,
    },
    attributes: {
      type: Object as attributes,
      required: false,
    },
    children: {
      type: Array as children,
      required: false,
    },
  },
})
</script>