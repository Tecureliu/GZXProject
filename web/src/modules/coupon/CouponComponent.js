import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
//import * as couponActions from './CouponAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import FooterComponent from '../footer/footerComponent.js'

//import FindpwComponent from './modules/findpw/FindpwComponent'
//import RegistComponent from './modules/regist/RegistComponent'
import './CouponComponent.scss'




class CouponComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    couponHandler() {
        // this.props.coupon(this.refs.username.value, this.refs.password.value, this.refs.phone.value).then(response => {
        //     //console.log(response)
        //     if(response.type == "SUCCESS"){
        //         this.props.route.push({
        //             component: MygzxComponent,
        //             title: 'Detail Info',
        //             rightButtonTitle: 'Shopping',
        //         })
        //     }
        // })
        // console.log(this.props)
    }
    toLastHandler(){
         history.go(-1);
    }
    render() {
        
        return (
            <div className="coupon-body">
                <div className="coupon-top">
                    <Link onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>优惠券</h4>
                </div>
                <ul  className="coupon-body-ul">
                    <li>
                        <img src="../../src/static/images/myGzxYhq/myGzxYhq-1.png" alt=""/>
                    </li>
                    <li>
                        <img src="../../src/static/images/myGzxYhq/myGzxYhq-2.png" alt=""/>
                    </li>
                </ul>
                <FooterComponent/>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     loading: state.coupon.loading
// })
// export default connect(mapStateToProps, couponActions)(CouponComponent)

export default CouponComponent