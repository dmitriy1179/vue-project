<template>
  <div class="wrapper">
    <div v-if="!isLoading" >
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
import { db } from "../../main"

export default {
  name: 'Dashboard',
  components: {Spinner},
  data() {
    return {
      users: [],
      name: "",
    }
  },
  props: {
    content: String
  },
  mounted() {
/*    this.usersData = db.collection("users").get("LA").then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === "LA") {
          let obj = doc.data()
          console.log(obj.country);
        }
      });
    });*/
    this.usersData = db.collection("channels").orderBy("id", 'asc').get().then((querySnapshot) => {
      console.log(querySnapshot)
      const channel = []
      querySnapshot.forEach((doc) => {
         channel.push(doc.data())
          let obj = doc.data()
          console.log(obj);
      });
      console.log("channel", channel)
    });
/*    const cityRef = db.collection('users').doc('LA');

    const setWithMerge = cityRef.set({
      comment: "test",

    }, { merge: true });
    console.log(setWithMerge)*/



 /*   db.collection("channels").add({
      name: "fourth",
      url: "https://test/fourth",
      status: false,
      user: "admin",
      description: "test4",
      type: "sales",
      timestamp: Date.now()
    })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });*/
  },
  computed: {
    ...mapState(['isLoading']),
  },
  methods: {
    addUser () {
      db.collection("users").add({
        name: "Ada",
      })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });

/*
      const createdAt = new Date()
*/
 /*     db.collection('users')/!*.add({name, createdAt})*!/
      console.log("db.collection('users')", db.collection('users'))
      this.usersData = db.collection('users')*/
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