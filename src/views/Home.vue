<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AddPersonForm msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import AddPersonForm from "@/components/AddPersonForm.vue";

export default {
  name: "Home",
  components: {
    AddPersonForm
  }
};
</script>
