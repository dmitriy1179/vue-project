<template>
  <div class="footer">
    <div>{{footerContent}}</div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  props: {
    footerContent: String
  }
}
</script>

<style scoped>

.footer {
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: darkslateblue;
  margin-top: auto;
  color: azure;
}


</style>