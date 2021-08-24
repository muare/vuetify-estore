<template>
    <v-sheet :height="getSheetHeight">
        <v-container class="fill-height">
            <v-row align="center" justify="center">
                <h1 class="text-center display-3 hidden-xs-only">
                    Welcome to Awesome Shop!
                </h1>
                <h3 class="text-center display-1 hidden-sm-and-up" >
                    Welcome to Awesome Shop!
                </h3>
            </v-row>
        </v-container>
        
    </v-sheet>
</template>

<script>
export default {
    computed: {
        getSheetHeight() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '200px'
                case 'sm': return '300px'
                case 'md': return '300px'
                case 'lg': return '300px'
                case 'xl': return '350px'
                default: return '300px'
            }
        }
    }
}
</script>