<template>
    <div>
        <v-row
        v-for="product in $store.state.products"
        :key="product.name">
        <HorizontalProduct :product="product"/>
        </v-row>
    </div>
</template>

<script>
import HorizontalProduct from '../cards/HorizontalCard.vue';

export default {
    components: {
        HorizontalProduct,
    }
}
</script>