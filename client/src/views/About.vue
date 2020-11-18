<template>
  <div>
    <h1>ini halaman utama</h1>
    <div class="card">
      <div class="cardCategori">{{ randomJoke.category }}</div>
      <div class="cardSetup">{{ randomJoke.setup }}</div>
      <div class="cardDelivery">{{ randomJoke.delivery }}</div>
      <br />
      <div class="button">
        <button @click.prevent="addToFavourite(randomJoke.id)">
          Add to Favourite
        </button>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import axios from "../../axios/axiosInstance";

export default {
  name: "About",
  data() {
    return {
      randomJoke: {},
    };
  },
  methods: {
    fetchRandomJoke() {
      const token = localStorage.token;
      console.log(token);
      axios({
        url: "/jokes/random",
        method: "get",
        headers: { token },
      })
        .then(({ data }) => {
          this.randomJoke = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToFavourite(id) {
      const token = localStorage.token;
      axios({
        url: "/favourites",
        method: "post",
        headers: { token },
        data: {
          JokeId: id,
        },
      })
        .then(() => {})
        .catch((error) => {});
    },
  },
  created() {
    const token = localStorage.token;
    if (!token) {
      this.$router.push({ name: "Login" });
    } else {
      this.fetchRandomJoke();
    }
  },
};
</script>

<style>
</style>