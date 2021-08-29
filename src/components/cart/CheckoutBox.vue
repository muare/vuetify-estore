<template>
    <v-card>
        <v-card-title>
            Payment Details
        </v-card-title>
        <v-card-text>
            <v-text-field label="name"/>
            <v-text-field label="email"/>
            <p>$999.</p>
            <v-btn class="primary"
            @click="gotoCheckout">
                checkout
            </v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    methods: {
        gotoCheckout(){
            //console.log('checkout')
            this.$router.push({name: 'checkout'})
        }
    }
}
</script>