import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './OrdersDetailsLogisticsComponent.scss'




class OrdersDetailsLogisticsComponent extends React.Component {
    toLastHandler(){
         history.go(-1);
    }
    render() {
        return (
            <div className="OrdersDetailsLogistics">
                <div className="delivery-top">
                    <Link onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>订单跟踪</h4>
                </div>
                <div className="OrdersDetailsLogisticsBody">
                    <p>订单号： 42827687</p>
                    <p>订单金额： ￥38.00</p>
                    <p>物流名称： 果真鲜生鲜物流</p>
                </div>
                <div className="OrdersDetailsLogisticsMsg">
                    <i className="iconfont icon-tianjiadizhi20x20"></i>
                    <p>
                        您提交了订单，等待客服审核。
                        <br/>
                        2017-06-10 23:20:26
                    </p>

                </div>
            </div>
            
        )
    }
}

export default OrdersDetailsLogisticsComponent