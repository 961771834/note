<template>
  <div id="app">
    <toolbar></toolbar>
    <node-list></node-list>
    <editor></editor>
  </div>
</template>

<script>
import Editor from './components/Editor'
import Toolbar from './components/Toolbar'
import NodeList from './components/NodeList'

export default {
  name: 'app',
  components: {
    Toolbar,
    NodeList,
    Editor,
  }
}
</script>

<style>
  html,#app{
    height : 100%;
  }
  body {
    margin: 0;
    padding: 0;
    position: relative;
    border: 0;
    max-height: 100%;
}
</style>
