<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img :src="captureData" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import html2canvas from 'html2canvas'

export default {
  name: 'App',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Default Title',
    // all titles will be injected into this template
    meta: [
      {
        hid: 'og:title',
        property: 'og:title',
        content: '타이틀내용입니다.'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '설명내용입니다.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'http://placeimg.com/640/480/fashion'
      },
      {
        hid: 'title',
        property: 'title',
        content: '타이틀내용입니다.'
      },
      {
        hid: 'description',
        property: 'description',
        content: '설명내용입니다.'
      },
    ]
  },
  data(){
    return{
      captureData: ''
    }
  },
  components: {
    HelloWorld
  },
  created(){
    this.getScreenshot()
  },
  mounted() {
    // this.getScreenshot()
  },
  methods: {
    getScreenshot() {
      html2canvas(document.querySelector("#app")).then(canvas => {
        this.captureData= canvas.toDataURL()
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
