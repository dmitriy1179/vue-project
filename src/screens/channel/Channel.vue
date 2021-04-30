<template>
  <div class="channel">
    <div>Channel</div>
    <button @click="incrementCount">{{ count }}</button>
    <span></span>

  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';

export default {
  name: "Channel",
  computed: {
    ...mapState(['count']),
  },
  methods: {
    ...mapActions(['incrementCount'])
  }
}
</script>

<style scoped>
.channel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}

</style>