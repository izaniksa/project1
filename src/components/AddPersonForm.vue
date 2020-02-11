<template>
  <div class="add-person-form">
    <h1>Add person form</h1>
    <div class="form-group">
      <input v-model="name" placeholder="Name" />
    </div>
    <div class="form-group">
      <input v-model="surname" placeholder="Surname" />
    </div>
    <button v-on:click="$emit('form-save', { name, surname })">Add</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AddPersonForm extends Vue {
  @Prop() private msg!: string;
  data() {
    return {
      name: "",
      surname: ""
    };
  }
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
