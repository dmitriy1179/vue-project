<template>
  <div class="wrapper">
    <div v-if="!this.isLoading" >
      {{content}}
      <div>
        <form @submit="addUser(name)">
          <input v-model="name" placeholder="User name">
          <button type="submit">Add user</button>
        </form>
      </div>
    </div>
    <Spinner v-else />
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";
import { mapState} from "vuex";
import { db } from "@/../src/main"

export default {
  name: 'Dashboard',
  components: {Spinner},
  data() {
    return {
      users: [],
      name: "",
    }
  },
  firestore () {
    return {
      users: db.collection('users').orderBy('name')
    }
  },
  props: {
    content: String
  },
  mounted() {
    this.usersData = db.collection('users')
    console.log("this.usersData", this.usersData)
  },
  computed: {
    ...mapState(['isLoading']),
  },
  methods: {
    addUser () {
/*
      const createdAt = new Date()
*/
      db.collection('users')/*.add({name, createdAt})*/
      console.log("db.collection('users')", db.collection('users'))
      this.usersData = db.collection('users')
    },
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.wrapper > div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
</style>