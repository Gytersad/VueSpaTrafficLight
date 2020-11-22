<template>
  <div class="trafficLight">
    <Light path="/red" class="red" :time="time"/>
    <Light path="/yellow" class="yellow" :time="time"/>
    <Light path="/green" class="green" :time="time"/>
    <Timer :time="time"/>
    <BtnSave class="button" v-on:saveInfo="saveInfo"/>
    <BtnLoad class="button" v-on:loadInfo="loadInfo"/>
  </div>
</template>

<script>
import Light from './components/Light'
import Timer from './components/Timer'
import BtnSave from "@/components/BtnSave";
import BtnLoad from "@/components/BtnLoad";


export default {
  components: {
    BtnSave,
    Light,
    Timer,
    BtnLoad,
  },
  data() {
    return {
      time: 0,
      changeID: '',
      timerID: ''
    }
  },
  methods: {
    loadInfo() {

      clearTimeout(this.changeID)
      clearTimeout(this.timerID)
      this.$router.push({path: localStorage.path, component: Light}).catch(() => {})
      this.time = localStorage.time
      this.lightTimeLeft()

      let red = new this.lightCreate('/red', 10)
      let yellowR = new this.lightCreate('/yellow', 3)
      let yellowG = new this.lightCreate('/yellow', 3)
      let green = new this.lightCreate('/green', 15)

      red.next = yellowR
      yellowR.next = green
      green.next = yellowG
      yellowG.next = red

      let beginState = ''
      if (this.$route.path === '/red') beginState = yellowR
      if (this.$route.path === '/yellow') beginState = red
      else if (this.$route.path === '/green') beginState = yellowG

      let loadID = setTimeout(() =>
              this.lightChange(beginState,
                  (state) => {this.$router.push({path: state.path, component: Light}).catch(() => {});}            ),
          (localStorage.time) * 1000)
      setTimeout(() => clearTimeout(loadID), localStorage.time * 1000)
    },
    saveInfo(){
      localStorage.time = this.time
      localStorage.path = this.$route.path
      console.log(`${localStorage.time}` +' '+ `${localStorage.path}`)
    },
    lightCreate(path, dur, next) {
      this.path = path
      this.dur = dur
      this.next = next
    },
    lightTimeLeft() {
      this.timerID = setInterval(() => {this.time--}, 1000)
      setTimeout(() => {clearInterval(this.timerID)}, this.time * 1000)
    },
    lightChange(state, callback) {
        callback(state)
        this.time = state.dur
        this.lightTimeLeft()
        this.changeID = setTimeout(() => {this.lightChange(state.next, callback)}, state.dur * 1000)
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

    this.lightChange(beginState, (state) => {this.$router.push({path: state.path, component: Light}).catch(() => {});})
  }
}


</script>

<style>
.trafficLight {
  margin: 0 auto;
  box-sizing: border-box;
  width: 100px;
  height: 320px;
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
.button{
  margin: 20px 0 0 -10px;
  width: 100px;
  height: 50px;
  color: white;
  background-color: black;
}
</style>
