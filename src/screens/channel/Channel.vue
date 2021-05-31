<template>
  <div class="wrapper">
    <div v-if="!this.isLoading" class="channel">
      <div class="channel__name">Channel</div>
      <div class="channel__content">
          <div class="channel__title">
            <div class="channel__title--icon">
              <div>A</div>
            </div>
            <div class="channel__title--text">Table <span>Channel</span></div>
          </div>
        <div class="channel__btns">
          <button type="button" @click.prevent="redirectToAdd">+ ADD</button>
          <button>Refresh</button>
        </div>
        <div class="channel_input">
          <input v-model="searchInput" type="text" placeholder="Search" name="ChannelSearch">
        </div>
        <div class="channel__table" v-if="!error">
          <table>
            <tr>
              <td>
                ID
              </td>
              <td>
                Name
              </td>
              <td>
                Channel Url
              </td>
              <td>
                Status On / Off
              </td>
              <td>
                User
              </td>
              <td>
                Description
              </td>
              <td>
                Type
              </td>
              <td>
                Actions
              </td>
            </tr>
            <ChannelDataRow v-for="(item, index) in allChannelData" :index="index + 1" :channelData="item" :key="item.id"/>
          </table>
        </div>
        <div v-else>
          Something went wrong!
        </div>
      </div>
    </div>
    <Spinner v-else />

  </div>
</template>

<script>
import ChannelDataRow from "@/screens/channel/components/ChannelDataRow";
import Spinner from "@/components/Spinner"
import {mapActions, mapState} from "vuex";
export default {
  name: "Channel",
  components: {Spinner, ChannelDataRow },
  methods: {
    ... mapActions(['getAllChannelData']),
    redirectToAdd () {
      this.$router.push('channel_add')
    },
  },
  computed: {
    ...mapState(['allChannelData', 'isLoading', 'error']),
  },
  created () {
    this.getAllChannelData();
  },
  data() {
    return {
      searchInput: null,
    }
  },

}
</script>

<style scoped>
.wrapper{
/*
  background-color: lightgray;
*/
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.channel {
  width: 100%;
  height: 100%;
  background-color: lightgray;
}
.channel__name {
  font-size: 20px;
  padding: 20px;
}
.channel__content {
  background-color: white;
  margin: 50px 10px 50px 20px;
}
.channel__title {
  display: flex;
  padding: 20px;

}
.channel__title--icon {
  width: 50px;
  position: relative;

}
.channel__title--icon > div {
  background-color: darkviolet;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
}
.channel__title--text {
  margin-left: 10px;
  font-size: 18px;
}
.channel__btns {
  padding-bottom: 20px;
}
.channel__btns > button {
  margin-left: 20px;
  width: 120px;
  height: 40px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: lightsteelblue;
  color: white;
}
.channel__btns > button:first-child{
  background-color: darkviolet;
}

.channel__btns > button:first-child:hover {
  background-color: blueviolet;
}
.channel__btns > button:last-child:hover {
  background-color: lightslategray;
}
.channel_input > input {
  margin: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #D3D3D3;
  font-size: 16px;
  outline: none;
}
table {
  width: 100%;
  text-align: center;

}

table tr:first-child {
  font-size: 16px;
}
table tr:not(:first-child) {
  font-size: 14px;
}
td {
  padding: 7px 10px;
}







</style>