<template>
  <div class="light" :class="{active: isActive}">
  </div>
</template>
<script>
export default {
  props: ['path'],
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
</style>