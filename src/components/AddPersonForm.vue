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
      <input type="radio" id="sex-male" value="Male" v-model="sex" />
      <label for="sex-male">Male</label>
      <input type="radio" id="sex-female" value="Female" v-model="sex" />
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
    <button v-on:click="save({ name, surname, birthDate, sex, hobbies })">Add</button>
    <Errors v-bind:errors="errors" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Errors from "@/components/Errors.vue";

@Component({
  components: {
    Errors
  }
})
export default class AddPersonForm extends Vue {
  data() {
    return {
      name: "",
      surname: "",
      birthDate: "",
      sex: "",
      hobbies: [],
      errors: []
    };
  }
  save(data: any) {
    this.$data.errors = [];
    if (!this.$data.name.length) {
      this.$data.errors.push("Name must be set");
    }
    if (!this.$data.surname.length) {
      this.$data.errors.push("Surname must be set");
    }
    if (!this.$data.hobbies.length) {
      this.$data.errors.push("At leest one hobby is required");
    }
    if (!this.$data.birthDate.length) {
      this.$data.errors.push("Birth date must be set");
    } else {
      const dateNow = Date.now();
      const birthDate = Date.parse(this.$data.birthDate);
      if (birthDate > dateNow) {
        this.$data.errors.push("Birth date must be not be from future");
      }
    }
    if (!this.$data.errors.length) {
      this.$emit("form-save", data);
    }
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
