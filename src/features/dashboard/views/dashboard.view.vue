<template>
  <div class="container">
    <h1>Control your arduino board</h1>
    <div class="row">
      <div class="col-md-6">
        <button type="button" class="btn btn-primary" @click='on'>Turn on the red diode attached to digital pin 11</button>
      </div>
      <div class="col-md-6">
        <p v-if="msgOn">The diode is on </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-danger" @click='off'>Turn off the red diode attached to digital pin 11</button>
      </div>
      <div class="col-md-6">
        <p v-if="msgOff">The diode is off </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-info" @click='blink'>The blink diode</button>
      </div>
      <div class="col-md-6">
        <range-slider class="slider" min="10" max="1500" step="10" v-model="sliderValue" @onchange='blink(this.sliderValue)'></range-slider>{{ sliderValue }}
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-warning" @click='fade'>The fade diode</button>
      </div>
      <div class="col-md-6">
  
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
const socket = io('http://localhost:5000');

import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

/*
socket.on('stream', function(data){
    app.title = data.title;
}); */

export default {
  name: 'dashboard-view',
  data: function () {
    return {
      msgOn: false,
      msgOff: false,
      sliderValue: 1000
    }
  },
  components: {
    RangeSlider
  },
  methods: {
    on: function () {
      this.msgOff = false;
      socket.send('on', 11);
      this.msgOn = true;
    },
    off: function () {
      socket.send('off', 11);
      this.msgOn = false;
      this.msgOff = true;
    },
    blink: function (sliderValue) {
      socket.send('blink', 11, this.sliderValue);
      console.log(this.sliderValue);
    },
    fade: function () {
      socket.send('fade', 11);
    },
  }
};
</script>

<style>
.container {
  background-color: #006666;
  border-radius: 10px;
  padding: 30px;
  margin-top: 50px;
  -webkit-box-shadow: 4px 1px 102px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 1px 102px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 1px 102px -3px rgba(0, 0, 0, 0.75);
}

.btn {
  width: 400px !important;
}

.col-md-6 {
  margin-bottom: 20px;
}

h1 {
  text-align: center !important;
  color: white !important;
  margin-bottom: 50px !important;
}

p {
  color: white;
  font-weight: bold;
}

.slider {
  width: 400px !important;
}
</style>