<template>
    <div>
        <template v-if="isString">{{bodyElement}}</template>
        <div v-else>{{bodyElement}}</div>
    </div>

</template>
  
<script>
import { computed } from 'vue';

export default {
    name: 'bodyElementRender',
    props: {
        bodyElement: {
            type: [ Object, String ],
            required: true
        }
    },
    computed: {
        isString() {
            return typeof this.bodyElement === "string" ? true : false
        }
    },
}
</script>
 