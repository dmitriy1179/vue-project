<template>
  <tr>
    <td>
      {{ index }}
    </td>
    <td>
      {{ channelData.name }}
    </td>
    <td>
      {{ channelData.url }}
    </td>
    <td>
      <input type="checkbox" :name="channelData.id" v-model="channelData.status" >
    </td>
    <td>
      <span>{{ channelData.user }}</span>
    </td>
    <td>
      {{ channelData.description }}
    </td>
    <td>
      {{ channelData.type }}
    </td>
    <td>
      <button type="button" @click.prevent="viewChannel(channelData.id)">View</button>
      <button type="button" @click.prevent="editChannel(channelData.id)">Edit</button>
      <button type="button" @click.prevent="deleteChannel(channelData.id)">Delete</button>
    </td>

  </tr>

</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "ChannelDataRow",
  props: ['channelData', 'index'],

  methods: {
    ... mapActions(['deleteChannelData']),
    viewChannel(id) {
      this.$router.push(`/channel/${id}`)
    },
    editChannel(id) {
      this.$router.push(`/channel/edit/${id}`)
    },
    deleteChannel(id) {
      this.deleteChannelData(id)
    }
  }
}
</script>

<style scoped>
td {
  padding: 7px 10px;
}

</style>