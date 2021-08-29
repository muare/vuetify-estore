<template>
  <v-stepper-content step="2">
    <v-text-field
      v-model="data.street"
      label="Street Address"
      required
    />

    <v-text-field
      v-model="data.state"
      label="State"
      required
    />

    <v-text-field
      v-model="data.zip"
      :rules="[rules.required, rules.zip]"
      label="Zip"
      required
    />

    <v-btn color="primary" @click="next"> Continue </v-btn>
    <v-btn text @click="previous">GO Back</v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  props: {
    data: Object,
    rules: Object,
    next: Function,
    previous: Function,
  },
};
</script>