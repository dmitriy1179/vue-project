<template>
  <div>
    <form>
      <div>
        <label>Login</label>
        <input v-model="form.login" type="text" placeholder="Login" name="login">
      </div>
      <div>
        <label>Password</label>
        <input v-model="form.password" type="password" placeholder="Password" name="password">
      </div>
      <div>
        <button @click.prevent="send">Enter</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      form: {
        login: null,
        password: null
      }
    }
  },
  methods: {
    send() {
      console.log(this.form)
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid lightgray;
  border-radius: 14px;
}
form > div:not(:last-child) {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin: 10px;
  align-items: center;
}
form > div:last-child {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px;
  align-items: center;
}
input {
  width: 75%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #D3D3D3;
  margin-left: 10px;
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