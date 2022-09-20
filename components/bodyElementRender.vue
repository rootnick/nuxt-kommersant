<template>
    <div>
        {{bodyElement}}
    </div>

</template>
  
<script>
import { computed } from 'vue';

export default {
    name: 'bodyElementRender',
    props: {
        bodyElement: {
            type: Object || String,
            required: true
        }
    },
}
</script>
 