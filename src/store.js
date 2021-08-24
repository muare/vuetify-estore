import Vue from 'vue'
import Vuex from 'vuex'
import products from './api/products'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        products,
        snackbar: {
            show: false,
            variant: 'success',
            message: 'Success! Item added to the cart.'
        },
        cart: [],
    },

    mutations: {
        addItemToCart(state, {itemId, quantity}) {
            const idx = state.cart.findIndex(product => {
                return product.itemId === itemId
            })

            if(idx === -1) {
                state.cart.push({itemId, quantity})
            }
            else {
                state.cart[idx].quantity+=quantity
            }
        },

        updateSnackbar(state, settings) {
            state.snackbar = {
                ...state.snackbar,
                ...settings,
            }
        }
    },

    actions: {

    }
})

export default store;