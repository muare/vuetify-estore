<template>
  <v-stepper-content step="1">
    <v-text-field
      v-model="data.name"
      :rules="[rules.required]"
      label="Name"
      required
    />

    <v-text-field
      v-model="data.email"
      :rules="[rules.required, rules.email]"
      label="Email"
      required
    />

    <v-text-field
      v-model="data.phone"
      :rules="[rules.required, rules.phone]"
      label="Phone Number"
      required
    />

    <v-btn color="primary" @click="next"> Continue </v-btn>
    <v-btn text @click="$router.replace({name: 'cart'})">Cancel</v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  props: {
    data: Object,
    rules: Object,
    next: Function,
  },
};
</script>