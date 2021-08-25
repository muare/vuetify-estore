<template>
  <v-container ma-12>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <h2>
          Popular Products
          <v-btn to="store" text color="primary" small>View All</v-btn>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <v-row>
          <v-col
            sm="6"
            md="4"
            v-for="product in $store.state.products.slice(0, 3)"
            :key="product.name"
          >
            <VerticalCard :product="product" :addToCart="addToCart"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerticalCard from "../cards/VerticalCard";

export default {
  components: {
    VerticalCard,
  },
  methods: {
      addToCart(index, quantity=1) {
          this.$store.commit('addItemToCart',{itemId: index, quantity})
          this.$store.commit('updateSnackbar',{show: true})
      }
  }
};
</script>