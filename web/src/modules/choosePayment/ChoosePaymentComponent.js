import { Router, Route, hashHistory, Link, IndexRoute, browserHistory } from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ChoosePaymentComponent.scss'



class OrderCompleteComponent extends React.Component {
    componentWillMount(){
        window.localStorage.removeItem('payment')
    }
    choosePaymentUpZxPayBody1(){
        var img1 = document.getElementsByClassName('choosePaymentUpZxPayBody-1')[0]
        var img2 = document.getElementsByClassName('choosePaymentUpZxPayBody-2')[0]
        var img3 = document.getElementsByClassName('choosePaymentUpZxPayBody-3')[0]
        var img4 = document.getElementsByClassName('choosePaymentUpZxPayBody-4')[0]
        img1.setAttribute('src',"../../src/static/images/myGzxOrder/check-on.png")
        img2.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        img3.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        img4.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        window.localStorage.setItem('payment','支付宝')
        //console.log(window.localStorage.getItem('payment'))
    }
    choosePaymentUpZxPayBody2(){
        var img1 = document.getElementsByClassName('choosePaymentUpZxPayBody-1')[0]
        var img2 = document.getElementsByClassName('choosePaymentUpZxPayBody-2')[0]
        var img3 = document.getElementsByClassName('choosePaymentUpZxPayBody-3')[0]
        var img4 = document.getElementsByClassName('choosePaymentUpZxPayBody-4')[0]
        img1.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        img2.setAttribute('src',"../../src/static/images/myGzxOrder/check-on.png")
        img3.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        img4.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        window.localStorage.setItem('payment','建设银行')
        //console.log(window.localStorage.getItem('payment'))
    }
    choosePaymentUpZxPayBody3(){
        var img1 = document.getElementsByClassName('choosePaymentUpZxPayBody-1')[0]
        var img2 = document.getElementsByClassName('choosePaymentUpZxPayBody-2')[0]
        var img3 = document.getElementsByClassName('choosePaymentUpZxPayBody-3')[0]
        var img4 = document.getElementsByClassName('choosePaymentUpZxPayBody-4')[0]
        img1.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        img2.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        img3.setAttribute('src',"../../src/static/images/myGzxOrder/check-on.png")
        img4.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        window.localStorage.setItem('payment','工商银行')
        //console.log(window.localStorage.getItem('payment'))
    }
    choosePaymentUpZxPayBody4(){
        var img1 = document.getElementsByClassName('choosePaymentUpZxPayBody-1')[0]
        var img2 = document.getElementsByClassName('choosePaymentUpZxPayBody-2')[0]
        var img3 = document.getElementsByClassName('choosePaymentUpZxPayBody-3')[0]
        var img4 = document.getElementsByClassName('choosePaymentUpZxPayBody-4')[0]
        img1.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        img2.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        img3.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        img4.setAttribute('src',"../../src/static/images/myGzxOrder/check-on.png")
        window.localStorage.setItem('payment','农业银行')
        //console.log(window.localStorage.getItem('payment'))
    }
    toLastHandler(){
          history.go(-1);
    }
    render() {
        return ( 
            <div className = "choosePayment">  
                <div className="choosePaymentUp">
                    <div className="choosePaymentUpTop">
                        <Link onClick={this.toLastHandler.bind(this)} className="toLastPage">
                            <i className="iconfont icon-fanhui"></i>
                        </Link>
                        <h4>订单完成</h4>
                    </div>
                    <div className="choosePaymentUpYck">
                        <span>预存款支付</span>
                        <span>
                            <span>无预存款可用</span>
                            <img src="../../src/static/images/myGzxOrder/default-close.png" alt=""/>
                        </span>
                    </div>
                    <div className="choosePaymentUpZxPay">
                        <div className="choosePaymentUpZxPayTitle">
                            <span>在线支付</span>
                        </div>
                        <div className="choosePaymentUpZxPayBody">
                            <ul>
                                <li>
                                    <span>
                                        <i className="iconfont icon-zhifubao"></i>
                                        <span>支付宝网页支付</span>
                                    </span>
                                    <img src="../../src/static/images/myGzxOrder/check-on.png"  className="choosePaymentUpZxPayBody-1" onClick={this.choosePaymentUpZxPayBody1.bind(this)}/>
                                </li>
                                <li>
                                    <span>
                                        <i className="iconfont icon-jianhang"></i>
                                        <span>建设银行网页支付</span>
                                    </span>
                                    <img src="../../src/static/images/myGzxOrder/check-close.png"  className="choosePaymentUpZxPayBody-2" onClick={this.choosePaymentUpZxPayBody2.bind(this)}/>
                                </li>
                                <li>
                                    <span>
                                        <i className="iconfont icon-gongshangyinhang"></i>
                                        <span>工商银行网页支付</span>
                                    </span>
                                    <img src="../../src/static/images/myGzxOrder/check-close.png"  className="choosePaymentUpZxPayBody-3" onClick={this.choosePaymentUpZxPayBody3.bind(this)}/>
                                </li>
                                <li>
                                    <span>
                                        <i className="iconfont icon-nongyeyinhang"></i>
                                        <span>农业银行网页支付</span>
                                    </span>
                                    <img src="../../src/static/images/myGzxOrder/check-close.png"  className="choosePaymentUpZxPayBody-4" onClick={this.choosePaymentUpZxPayBody4.bind(this)}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="choosePaymentDown">
                    <div className="choosePaymentDownLeft">
                        <span>应付金额：</span>
                        <span className= "choosePaymentPrice">￥40.40</span>
                    </div>
                    <div className="choosePaymentDownRight">
                        <Link to="/orderComplete" className="choosePaymentDownRightLink">确认支付</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderCompleteComponent