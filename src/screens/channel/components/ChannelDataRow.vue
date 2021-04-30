<template>
  <tr>
    <td>
      {{ channelData.id }}
    </td>
    <td>
      {{ channelData.name }}
    </td>
    <td>
      {{ channelData.url }}
    </td>
    <td>
      <input type="checkbox" :name="channelData.id" :checked="channelData.status">
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
      <button type="button">Delete</button>
    </td>

  </tr>

</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "tablesRow",
  props: ['channelData'],
  methods: {
    ... mapActions(['viewChannelData', 'editChannelData']),
    viewChannel(id) {
      this.viewChannelData(id)
    },
    editChannel(id) {
      this.editChannelData(id)
    }
  }
}
</script>

<style scoped>

</style>