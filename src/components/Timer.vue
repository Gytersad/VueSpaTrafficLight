<template>
  <div class="timer">
    {{time}}
  </div>
</template>

<script>
export default {
  props: ['time'],
}
</script>

<style scoped>
.timer {
  font-size: 18px;
  text-align: center;
  color: white;
}
</style>
