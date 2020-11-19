<template>
  <div class="timer">
    {{time}}
  </div>
</template>

<script>
export default {
  props: ['time'],
  created () {
    this.time++
    setInterval(() => {
      this.time--
    }, 1000)
  }
}
</script>

<style scoped>
.timer {
  font-size: 18px;
  text-align: center;
  color: white;
}
</style>