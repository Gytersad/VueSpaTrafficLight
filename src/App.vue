<template>
  <div class="trafficLight">
    <Light path="/red" class="red" :time="time"/>
    <Light path="/yellow" class="yellow" :time="time"/>
    <Light path="/green" class="green" :time="time"/>
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
    lightCreate(path, dur, next) {
      this.path = path
      this.dur = dur
      this.next = next
    },
    lightTimeLeft() {
      let timerID = setInterval(() => {this.time--}, 1000)
      setTimeout(() => {clearInterval(timerID)}, this.time * 1000)
    },
    lightChange(state, callback) {
      callback(state)
      this.time = state.dur
      this.lightTimeLeft()
      setTimeout(() => {this.lightChange(state.next, callback)}, state.dur * 1000)
    },
  },
  created() {
    let red = new this.lightCreate('/red', 10)
    let yellowR = new this.lightCreate('/yellow', 3)
    let yellowG = new this.lightCreate('/yellow', 3)
    let green = new this.lightCreate('/green', 15)

    red.next = yellowR
    yellowR.next = green
    green.next = yellowG
    yellowG.next = red

    let beginState = red
    if (this.$route.path === '/yellow') beginState = yellowR
    else if (this.$route.path === '/green') beginState = green

    this.lightChange(beginState, (state) => {
      this.$router.push({path: state.path, component: Light}).catch(() => {
      });
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
  background-color: rgb(230, 0, 0);
}

.yellow {
  background-color: rgb(255, 120, 0);
}

.green {
  background-color: rgb(76, 187, 23);
}

</style>
