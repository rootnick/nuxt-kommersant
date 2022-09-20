<template>
    <p class=”doc__text” v-html="htmlText">
    </p>
</template>
  
<script>
import { computed } from 'vue';

export default {
    name: 'textRender',
    props: {
        bodyElements: {
            type: Array,
            required: true
        }
    },
    computed: {
        htmlText() {
            return this.bodyElements.reduce((acc, current) => {
                if (current.tagName) {
                    return acc + this.generateTag()
                }
                return acc + current
            }, '')
        }
    },
    methods: {
        generateTag() {
            return 'bla-bla'
        }
    }
}
</script>
 