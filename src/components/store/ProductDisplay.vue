<template>
  <v-container>
    <v-row>
      <v-col
        sm="6"
        md="4"
        v-for="product in $store.state.products"
        :key="product.name"
      >
      <VerticalCard :product="product" :addToCart="addToCart"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerticalCard from "../cards/VerticalCard.vue";

export default {
  components: {
    VerticalCard,
  },

  methods: {
    addToCart(index, quantity = 1) {
      this.$store.commit("addItemToCart", { itemId: index, quantity });
      this.$store.commit("updateSnackbar", { show: true });
    },
  },
};
</script>