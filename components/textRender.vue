<template>
    <p class=”doc__text”>{{bodyElements}}</p>
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
}
</script>
 