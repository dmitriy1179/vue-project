<template>
  <div class="wrapper">
    <div v-if="!isLoading" >
      <div v-if="!error">
        <ChannelForm :channelData="channelData" />

      </div>
      <div v-else>
        Something went wrong!
      </div>
    </div>
    <Spinner v-else />
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";
import {mapActions, mapState} from "vuex";
import ChannelForm from "@/components/ChannelForm";

export default {
  name: 'AddChannel',
  components: {Spinner, ChannelForm},
  computed: {
    ...mapState(['isLoading', 'error', 'channelData']),
  },
  created() {
    this.resetChannelData()
  },
  methods: {
    ... mapActions(['resetChannelData']),
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;

}
.wrapper > div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
.wrapper > div > div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}

</style>