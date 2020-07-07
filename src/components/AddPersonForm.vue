<template>
  <div class="add-person-form">
    <h1>Add person form</h1>
    <div class="form-group">
      <input v-model="name" placeholder="Name" />
    </div>
    <div class="form-group">
      <input v-model="surname" placeholder="Surname" />
    </div>
    <div class="form-group">
      <input type="date" v-model="birthDate" placeholder="Dirth Date" />
    </div>
    <div class="form-group">
      <input type="radio" id="sex-male" value="male" v-model="sex" />
      <label for="sex-male">Male</label>
      <input type="radio" id="sex-female" value="female" v-model="sex" />
      <label for="sex-female">Female</label>
    </div>
    <div class="form-group">
      <select v-model="hobbies" multiple>
        <option>Books</option>
        <option>Swimming</option>
        <option>Music</option>
        <option>Cats</option>
      </select>
    </div>
    <button v-on:click="$emit('form-save', { name, surname, birthDate, sex, hobbies })">Add</button>
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
      surname: "",
      birthDate: "",
      sex: "",
      hobbies: []
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
