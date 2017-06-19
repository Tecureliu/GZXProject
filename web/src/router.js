import React from 'react'
import {Route,IndexRoute} from 'react-router'


import AppComponent from './modules/app/AppComponent'
import IndexComponent from './modules/index/IndexComponent'
import CcbComponent from './modules/index/ccbComponent/ccbComponent'
import RemaiComponent from './modules/index/remaiComponent/remaiComponent'
import CityComponent from './modules/index/cityComponent/cityComponent'
import MemberBoonComponent from './modules/index/memberBoonComponent/memberBoonComponent'
import SignInComponent from './modules/index/signInComponent/qdComponent'
import CompanyBoonComponent from './modules/index/companyBoonComponent/companyBoonComponent'
import BankActivityComponent from './modules/index/bankActivityComponent/bankActivityComponent'
import BackTrackComponent from './modules/index/backTrackComponent/backTrackComponent'


import CarlistComponent from './modules/carlist/CarlistComponent'
import listing from './modules/ddlist/DDlistReducer'
import DDlistComponent from './modules/ddlist/DDlistComponent'


import BuyComponent from './modules/buy/BuyComponent'


import cartComponent from './modules/cart/cartComponent'
import orderComponent from './modules/order/orderComponent'


import MygzxComponent from './modules/mygzx/MygzxComponent'
import LoginComponent from './modules/login/LoginComponent'
import FindpwComponent from './modules/findpw/FindpwComponent'
import RegistComponent from './modules/regist/RegistComponent'
import SettingComponent from './modules/setting/SettingComponent'
import MygzxKfrxComponent from './modules/mygzxKfrx/MygzxKfrxComponent'
import ResetLoginPwComponent from './modules/resetLoginPw/ResetLoginPwComponent'
import ResetPayPwComponent from './modules/resetPayPw/ResetPayPwComponent'
import ChangePhoneComponent from './modules/changePhone/ChangePhoneComponent'
import AboutUsComponent from './modules/aboutUs/AboutUsComponent'
import SendIntroductionsComponent from './modules/sendIntroductions/SendIntroductionsComponent'
import ChangingOrRefundingIntroductionsComponent from './modules/changingOrRefundingIntroductions/ChangingOrRefundingIntroductionsComponent'
import OrdersComponent from './modules/orders/OrdersComponent'
import OrdersDetailComponent from './modules/ordersDetail/OrdersDetailComponent'
import OrdersDetailsLogisticsComponent from './modules/ordersDetailsLogistics/OrdersDetailsLogisticsComponent'
import CouponComponent from './modules/coupon/CouponComponent'
import AddressComponent from './modules/address/AddressComponent'
import AddressMsgComponent from './modules/addressMsg/AddressMsgComponent'
import AddressMsgNowComponent from './modules/addressMsgNow/AddressMsgNowComponent'
import DeliveryComponent from './modules/delivery/DeliveryComponent'
import GroupPurchaseComponent from './modules/groupPurchase/GroupPurchaseComponent'

import OrderCompleteComponent from './modules/orderComplete/OrderCompleteComponent'
import ChoosePaymentComponent from './modules/choosePayment/ChoosePaymentComponent'



export default (
    <Route path="/" component={AppComponent}>
    	<Route path="index" component={IndexComponent}/>
        <Route path="city" component={CityComponent}/>
        <Route path="ccb" component={CcbComponent}/>
        <Route path="qiandao" component={SignInComponent}/>
        <Route path="remai" component={RemaiComponent}/>
        <Route path="carlist" component={CarlistComponent}/>
        <Route path="ddlist" component={DDlistComponent}/>
        <Route path="company" component={CompanyBoonComponent}/>
        <Route path="bank" component={BankActivityComponent}/>
        <Route path="member" component={MemberBoonComponent}/>
        <Route path="track" component={BackTrackComponent}/>
        

		<Route path="carlist" component={CarlistComponent} />
        <Route path="ddlist" component={DDlistComponent} />


        <Route path="buy" component={BuyComponent} />


        <Route path="cart" component={cartComponent} />
        <Route path="order" component={orderComponent} />


        <Route path="mygzx" component={MygzxComponent} />
        <Route path="login" component={LoginComponent} />
        <Route path="regist" component={RegistComponent} />
        <Route path="findpw" component={FindpwComponent} />
        <Route path="setting" component={SettingComponent} />
        <Route path="mygzxKfrx" component={MygzxKfrxComponent} />
        <Route path="resetLoginPw" component={ResetLoginPwComponent} />
        <Route path="resetPayPw" component={ResetPayPwComponent} />
        <Route path="changePhone" component={ChangePhoneComponent} />
        <Route path="aboutUs" component={AboutUsComponent} />
        <Route path="sendIntroductions" component={SendIntroductionsComponent} />
        <Route path="changingOrRefundingIntroductions" component={ChangingOrRefundingIntroductionsComponent} />
        <Route path="orders" component={OrdersComponent} />
        <Route path="ordersDetail" component={OrdersDetailComponent} />
        <Route path="ordersDetailsLogistics" component={OrdersDetailsLogisticsComponent} />
        <Route path="coupon" component={CouponComponent} />
        <Route path="address" component={AddressComponent} />
        <Route path="addressMsg" component={AddressMsgComponent} />
        <Route path="addressMsgNow/:id" component={AddressMsgNowComponent} />
        <Route path="delivery" component={DeliveryComponent} />
        <Route path="groupPurchase" component={GroupPurchaseComponent} />

        <Route path="orderComplete" component={OrderCompleteComponent} />
        <Route path="choosePayment" component={ChoosePaymentComponent} />
    </Route>
)