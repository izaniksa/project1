<template>
  <div class="add-person">
    <h1>This is an add person page</h1>
    <AddPersonForm v-on:form-save="onFormSave" />
    <UsersList v-bind:users="users" />
  </div>
</template>

<script lang="ts">
import AddPersonForm from "@/components/AddPersonForm.vue";
import UsersList from "@/components/UsersList.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    AddPersonForm,
    UsersList
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    onFormSave(form) {
      this.$data.users.push(form);
      console.log(form);
    }
  }
})
export default class AddPerson extends Vue {}
</script>
