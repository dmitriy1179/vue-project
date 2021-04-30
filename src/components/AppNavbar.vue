<template>
  <nav>
    <div>

    </div>
    <ul>
      <li>
        <router-link active-class="active" to="/" exact>Dashboard</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/new-page" exact>Next page</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar"
}
</script>

<style scoped>

nav {
  width: 30%;
  background-color: cornflowerblue;
}
ul {
  list-style: none;
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

li:not(:last-child) {
  margin-bottom: 15px;
}

li > a {
  text-decoration: none;
  color: oldlace;

}
.active {
  color: lightgray;
  cursor: default;
}



</style>