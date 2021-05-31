<template>
  <div class="channel">
    <div class="channel-title">
      <template v-if="channelData.id">
        Edit channel {{channelData.name}}
      </template>
      <template v-else>
        Add channel
      </template>
    </div>
    <div class="channel-form">
      <div>
        <label for="name">Name</label>
        <input v-model="channelData.name" type="text" placeholder="Name" name="name" id="name">
      </div>
      <div>
        <label for="channel">Channel Url</label>
        <input v-model="channelData.url" type="text" placeholder="Channel Url" name="channel" id="channel">
      </div>
      <div>
        <label for="status">Status</label>
        <input v-model="channelData.status" type="checkbox" placeholder="Status" name="status" id="status">
      </div>
      <div>
        <label for="user">User</label>
        <Multiselect
        v-model="channelData.user"
        :options="arrUsers"
        placeholder="User"
        :multiple="false"
        id="user"
        >
        </Multiselect>
      </div>
      <div>
        <label for="description">Description</label>
        <input v-model="channelData.description" type="text" placeholder="Description" name="description" id="description">
      </div>
      <div>
        <label for="type">Type</label>
        <input v-model="channelData.type" type="text" placeholder="Type" name="type" id="type">
      </div>
      <div>
        <template v-if="channelData.id">
          <button @click.prevent="edit(channelData)">Edit Channel</button>
        </template>
        <template v-else>
          <button @click.prevent="add(channelData)">Add Channel</button>
        </template>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions} from "vuex";
import Multiselect from 'vue-multiselect'


export default {
  name: "ChannelForm",
  components: { Multiselect },
  props: ['channelData'],
  data() {
    return {
      arrUsers: ["admin", "guest"],
    }
  },
  methods: {
    ... mapActions(['editChannelData', 'addChannel']),
    edit(data) {
      this.editChannelData(data)
    },
    add(data) {
      this.addChannel(data)
    },
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.channel {
  width: 100%;
}
.channel-title {
  font-size: 20px;
  text-align: center;
  padding: 20px;
}
.channel-form {
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid lightgray;
  border-radius: 14px;
  background-color: aliceblue;
}

.channel-form > div {
  display: flex;
  align-items: center;
  padding: 10px;
}

label {
  min-width: 100px;
  font-size: 16px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #D3D3D3;
  font-size: 14px;
}
.multiselect {
  width: 100%;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #D3D3D3;
}

[type="checkbox"] {
  width: initial;
}
button {
  width: 20%;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: 3px solid transparent;
  outline: none;
  background-clip: padding-box;
  font-size: 16px;
}
button:hover {
  background-color: lightgray;
  cursor: pointer;
  border: 3px solid lightslategray;

}

</style>