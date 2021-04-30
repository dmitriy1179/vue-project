<template>
    <div class="header">
       <div>{{title}}</div>
    </div>
  </template>

<script>
export default {
  name: 'AppView',
  props: {
    title: String
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: lightskyblue;
  color: azure;
}
</style>