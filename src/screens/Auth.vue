<template>
  <div class="wrapper">
    <div v-if="!isLoading" class="auth-form">
      <div>
        <div>
          <input v-model="form.login" type="text" placeholder="Login" name="login">
        </div>
        <div>
          <input v-model="form.password" type="password" placeholder="Password" name="password">
        </div>
        <div>
          <button @click.prevent="send">Enter</button>
        </div>
      </div>
    </div>
    <Spinner v-else />

  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';
import Spinner from "@/components/Spinner";

export default {
  name: "Auth",
  components: {Spinner},
  comments: {Spinner},
  data() {
    return {
      form: {
        login: null,
        password: null
      }
    }
  },
  methods: {
    ... mapActions(['logged']),
    send() {
      this.logged({ data: this.form })
    }
  },
  computed: {
    ...mapState(['isLoggedIn', 'isLoading']),
  },
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.auth-form {
  width: 100%;
  background: url(./../assets/images/mount.png) no-repeat center/cover
}
.auth-form > div {
  width:50%;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid lightgray;
  border-radius: 14px;
  background-color: aliceblue;
}
.auth-form > div > div {
  margin: 10px;
  display: flex;
  justify-content: center;
}

.auth-form > div > div:last-child {
  margin-bottom: 0;
}


input {
  width: 75%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #D3D3D3;
  font-size: 16px;
}
button {
  justify-self: center;
  width: 20%;
  padding: 10px;
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