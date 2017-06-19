
import index from '../modules/index/IndexReducer'
import backTop from '../modules/backTop/backTopReducer'
import {routerReducer as router} from 'react-router-redux'
import city from '../modules/index/cityComponent/cityReducer'
import hotSale from '../modules/index/remaiComponent/hotSaleReducer'


import cartReducer from '../modules/cart/cartReducer'
import order from '../modules/order/orderReducer'


import listing from '../modules/ddlist/DDlistReducer.js'


import login from '../modules/login/LoginReducer'
import regist from '../modules/regist/RegistReducer'
import findpw from '../modules/findpw/FIndpwReducer'
import resetLoginPw from '../modules/resetLoginPw/ResetLoginPwReducer'
import addressMsg from '../modules/addressMsg/AddressMsgReducer'
import address from '../modules/address/AddressReducer'
import addressMsgNow from '../modules/addressMsgNow/AddressMsgNowReducer'
import ordersDetail from '../modules/ordersDetail/OrdersDetailReducer'
import ordersCar from '../modules/orders/OrdersReducer'

import buy from '../modules/buy/BuyReducer'


import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    city,
    router,
    index,
    backTop,
    hotSale,

    cartReducer,
    order,

    listing,

    buy,

    ordersCar,
    address,
 	addressMsg,
    ordersDetail,
    addressMsgNow,
    login,
    regist,
    findpw,
    resetLoginPw,
    router
})

export default rootReducer