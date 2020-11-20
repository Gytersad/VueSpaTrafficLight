<template>
  <div class="light"
       :class="{
    active: (isActive) && (this.time > 3),
    blink: (isActive) && (this.time <= 3)}">
  </div>
</template>
<script>
export default {
  props: ['path', 'time'],
  computed: {
    isActive: function () {
      return this.$route.path === this.path
    }
  },
}

</script>
<style scoped>
.light {
  border-radius: 100%;
  margin: 10px auto;
  width: 80px;
  height: 80px;
  opacity: 0.1;
  transition: opacity 0.2s
}

.active {
  opacity: 1;
}

.blink {
  animation-duration: 400ms;
  animation-name: blink;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes blink {
  from { opacity: 1.0; }
  to { opacity: 0.1; }
}
</style>
