<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Index from './components/Index.vue'
import navbar from './components/Nav.vue'
import store from './vuex/store.js'
	
	export default {
		name: 'App',
		
		//store,
		
		components:{Index,navbar}
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
