<template>
  <button v-on:click="$emit('saveInfo')">
    <span>Save</span>
  </button>
</template>

<script>
export default {
  name: "BtnSave",
}
</script>

