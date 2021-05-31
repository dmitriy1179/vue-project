<template>
  <div class="wrapper">
    <div v-if="!isLoading" >
      <div v-if="!error">
        <div>
          <span>ID: </span>
          <span>{{channelData.id}}</span>
        </div>
        <div>
          <span>Name: </span>
          <span>{{channelData.name}}</span>
        </div>
        <div>
          <span>Channel Url: </span>
          <span>{{channelData.url}}</span>
        </div>
        <div>
          <span>User: </span>
          <span>{{channelData.user}}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{{channelData.description}}</span>
        </div>
        <div>
          <span>Type: </span>
          <span>{{channelData.type}}</span>
        </div>
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

export default {
  name: 'OneChannel',
  components: {Spinner},
  computed: {
  ...mapState(['isLoading', 'channelData', 'error']),
  },
  created() {
    this.getChannelData(this.$route.params.id)
  },
  methods: {
    ... mapActions(['getChannelData']),
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
  align-items: center;
  flex-direction: column;
  font-size: 15px;
}
</style>