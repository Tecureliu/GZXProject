import { Router, Route, hashHistory, Link, IndexRoute, browserHistory } from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './OrderCompleteComponent.scss'



class OrderCompleteComponent extends React.Component {
    toLastHandler(){
         history.go(-1);
    }
    render() {
        return ( 
            <div className = "orderComplete">  
                <div className="orderCompleteTop">
                    <Link  onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>订单完成</h4>
                </div>
                <div className = "orderCompleteIconfont">
                    <i className= "iconfont icon-chenggong"></i>
                    <span>订单提交成功，请尽快支付！</span>
                </div>
                <div className="orderCompleteBody">
                    <div className="orderCompleteBodyTop">
                        <div className="orderCompleteBodyTopLeft">
                            <span>订单编号：</span>
                            <p>42694725</p>
                            <br/>
                            <span>应付金额：</span>
                            <p className="orderCompletePrice">￥105.80</p>
                            <br/>
                            <span>支付方式：</span>
                            <p>{window.localStorage.getItem('payment') ? window.localStorage.getItem('payment') : <p>支付宝</p>}</p>
                        </div>
                        <div className="orderCompleteBodyTopRight">
                           {localStorage.getItem("data") ?  <Link to="/orders" className="orderCompleteBodyTopRightBtn">
                                查看详情
                            </Link> : <Link to="/login" className="orderCompleteBodyTopRightBtn">
                                查看详情
                            </Link> }
                            
                        </div>
                    </div>
                    <hr className= "line"/>
                    <div className="orderCompleteBodyBottom">
                        <div className="orderCompleteBodyBottomLeft">
                            <span>
                                预计送达时间
                            </span>
                            <p>
                                请以实际送达时间为准
                            </p>
                        </div>
                        <div className="orderCompleteBodyBottomRight">
                            <span>2017-06-10</span>
                        </div>
                    </div>
                </div>
                <div className="orderCompleteBtn">
                    <button>
                        去支付
                    </button>
                </div>
                <img className="orderCompleteImg" src="../../src/static/images/mygzxOc/bgimg.png" alt=""/>
            </div>
        )
    }
}

export default OrderCompleteComponent