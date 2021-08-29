import Home from './views/Home'
import Store from './views/Store'
import Cart from './views/Cart'
import Checkout from './views/Checkout'
import ThankYou from './views/ThankYou'

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/store', name: 'store', component: Store},
    {path: '/cart', name: 'cart', component: Cart},
    {path: '/checkout', name: 'checkout', component: Checkout},
    {path: '/thankyou', name: 'thankyou', component: ThankYou},
]



export default routes;