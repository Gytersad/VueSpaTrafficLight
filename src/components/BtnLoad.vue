<template>
  <button v-on:click="$emit('loadInfo')">
    <span>Load</span>
  </button>
</template>

<script>
export default {
name: "BtnLoad"
}
</script>

<style scoped>

</style>
