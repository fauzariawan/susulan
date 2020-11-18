<template>
  <div>
    <h1>ini halaman utama</h1>
  </div>
</template>

<script>
export default {
  created() {
    const token = localStorage.token;
    if (!token) {
      this.$router.push({ name: "" });
    } else {
    }
  },
};
</script>

<style>
</style>