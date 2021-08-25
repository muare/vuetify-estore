<template>
  <v-card>
    <v-img :src="product.image" height="200px"> </v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>{{ product.price }}</v-card-subtitle>
    <v-card-action>
      <v-btn @click="addToCart" color="success" outlined>
        <v-icon left small>fa-plus</v-icon>
        Add to Cart
      </v-btn>
    </v-card-action>
  </v-card>
</template>

<script>
export default {
    props: {
        product: Object,
        addToCart: Function,
    }
}
</script>