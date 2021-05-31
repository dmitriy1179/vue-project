<template>
  <nav>
    <div>
      SALES
    </div>
    <hr>
    <ul>
      <li>
        <router-link active-class="active" to="/" exact>Dashboard</router-link>
      </li>
      <li>
        <router-link active-class="active" :to="`/user`" exact>User managment</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/channel" exact>Channel</router-link>
      </li>
      <li>
        <button @click.prevent="logout" type="button">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: "AppNavbar",
  methods: {
    ... mapActions(['logouted']),
    logout() {
      localStorage.removeItem("token");
      this.logouted()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
nav > div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: oldlace;
  position: relative;
  z-index: 2;


}
hr {
  width: 80%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

nav {
  width: 300px;
  background: url(./../assets/images/mount.png) no-repeat center/cover;
  position: relative;
}
nav::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.7;


}
ul {
  list-style: none;
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0 0;
  padding: 0;
  z-index: 2;
  position: relative;
}

li:not(:last-child) {
  margin-bottom: 15px;
}

li > * {
  text-decoration: none;
  color: oldlace;
  outline: none;
  cursor: pointer;
  background-color: inherit;
  border: none;
  font-size: 16px;
  font-family: inherit;

}
.active {
  color: lightgray;
  cursor: default;
}


</style>