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
                    return acc + this.generateTag(current)
                }
                return acc + current
            }, '')
        }
    },
    methods: {
        generateTag(element) {
            return `<${element.tagName} ${element.attributes?this.genenerateAttributes(element.attributes):''}> 
                ${element.children} 
            </${element.tagName}>`
        },
        genenerateAttributes(attributes) {
            return Object.entries(attributes).reduce((acc, current) => {
                return acc + `${current[0]}=${current[1]}`
            }, '')
        }
    }
}
</script>
 