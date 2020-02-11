<template>
  <div class="add-person">
    <h1>This is an add person page</h1>
    <AddPersonForm msg="Welcome to Your Vue.js App" v-on:form-save="onFormSave" />
  </div>
</template>

<script lang="ts">
import AddPersonForm from "@/components/AddPersonForm.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    AddPersonForm
  },
  methods: {
    onFormSave: form => {
      console.log(form);
    }
  }
})
export default class AddPerson extends Vue {}
</script>
