<template>
  <div class="home">
    <form @submit.prevent="login">
      <label for="">username</label>
      <input v-model="username" type="text" name="username" id="username" />
      <label for="">password</label>
      <input v-model="password" ltype="text" name="password" id="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "../../axios/axiosInstance";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios({
        url: "/signIn",
        method: "post",
        data: {
          username: this.username,
          password: this.password,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          this.$router.push({ name: "About" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {},
};
</script>
