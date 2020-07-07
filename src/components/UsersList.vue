<template>
  <div class="users-list">
    <ul id="example-1">
      <li
        v-for="user in users"
        :key="user.name"
      >Name: {{ user.name }}, Surname: {{ user.surname }}, Dirt Date: {{ user.birthDate }}, Sex: {{ user.sex }}, Hobbies: {{ user.hobbies }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class UsersList extends Vue {
  @Prop() private users!: [];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
