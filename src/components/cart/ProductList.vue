<template>
  <v-container>
    <v-row v-for="product in $store.state.products" :key="product.name">
      <HorizontalProduct :product="product" />
    </v-row>
  </v-container>
</template>

<script>
import HorizontalProduct from "../cards/HorizontalCard.vue";

export default {
  components: {
    HorizontalProduct,
  },
};
</script>