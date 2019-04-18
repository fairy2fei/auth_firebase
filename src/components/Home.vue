<template>
<div><Firebase /></div>
</template>

<script>
import { mapState } from 'vuex'
import Firebase from './Firebase.vue'

export default {
  components: {Firebase},
  computed: mapState(['authError'])
}
</script>
<style>
.alert{
max-width: 500px;
text-align: center;
margin: auto;
}
</style>
