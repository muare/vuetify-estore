<template>
    <v-container>
        <v-row>
            <v-col md="3" offset-lg="1">
                <Sidebar />
            </v-col>
            <v-col md="9" lg="7">
                <ProductDisplay />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import ProductDisplay from '../components/store/ProductDisplay.vue';
import Sidebar from '../components/store/Sidebar.vue';

export default {
    components: {
        ProductDisplay,
        Sidebar,
    }   
}
</script>