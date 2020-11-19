<template>
  <div class="trafficLight">
    <Light path="/red" class="red"/>
    <Light path="/yellow" class="yellow"/>
    <Light path="/green" class="green"/>
    <Timer :time="time"/>
  </div>
</template>

<script>
import Light from './components/Light'
import Timer from './components/Timer'

export default {
  components: {
    Light,
    Timer,
  },
  data() {
    return {
      time: 0
    }
  },
  methods: {
    ligthCreate(path, dur, next) {
      this.path = path
      this.dur = dur
      this.next = next
    },
    lightChange(state, callback) {
      callback(state)
      this.time = state.dur
      setInterval(() => {
        this.time--
      }, 1000)
      setTimeout(() => {
        this.lightChange(state.next, callback)
      }, state.dur * 1000)
    },
  },
  created() {
    let red = new this.ligthCreate('/red', 10)
    let yellowR = new this.ligthCreate('/yellow', 3)
    let yellowG = new this.ligthCreate('/yellow', 3)
    let green = new this.ligthCreate('/green', 15)

    red.next = yellowR
    yellowR.next = green
    green.next = yellowG
    yellowG.next = red

    let beginState = red
    if (this.$route.path === '/yellow') beginState = yellowR
    else if (this.$route.path === '/green') beginState = green

    this.lightChange(beginState, (state) => {
      this.$router.push({path: state.path, component: Light}).catch(()=>{});
    })
  }
}


</script>

<style>
.trafficLight {
  width: 100px;
  height: 300px;
  background: black;
  padding: 10px;
}

.red {
  background: red;
}

.yellow {
  background: yellow;
}

.green {
  background: green;
}

</style>
