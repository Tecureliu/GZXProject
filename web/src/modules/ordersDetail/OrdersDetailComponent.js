import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import * as ordersDetailAction from './OrdersDetailAction'
import { connect } from 'react-redux'
import './OrdersDetailComponent.scss'




class OrdersDetailComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    ordersDetailHandler() {
        // this.props.ordersDetail(this.refs.username.value, this.refs.password.value, this.refs.phone.value).then(response => {
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
    componentWillMount(){
        
        if(JSON.parse(localStorage.getItem("data"))){
            let phone = JSON.parse(localStorage.getItem("data")).phone
            this.props.orderDetail(phone)
        }
        //console.log(JSON.parse(localStorage.getItem("addressMsg")))
             
    }
    toLastHandler(){
         history.go(-1);
    }
    render() {
        let message = this.props.datas.message;
        let data =[];
        //console.log(message)
        for(let attr in message){
            if(attr =='data'){
                
                data = message[attr];
                
            }
        }
        //console.log(data&&data)
        data&&data.map(function(obj){
            if(obj.addressuseraddressDefault == '1'){
                    data = obj
                   //data = obj[attr]
                   
            }
        })
        //console.log(data)
        
        //console.log(data&&data)
        var orderDetailAdd = JSON.parse(window.localStorage.getItem("defaultAddress"))
        return (
            
            <div className="ordersDetail-body">
                <div className="ordersDetail-top">
                    <Link  onClick={this.toLastHandler.bind(this)}  className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>订单详情</h4>
                </div>
                <div className="ordersDetail-firstContain">
                    <span>
                        <p>订单编号：</p>
                        <p>42827687</p>
                    </span>
                    <span>
                        <p>下单时间：</p>
                        <p>2017-06-10 23:20:26</p>
                    </span>
                    <span>
                        <p>应付金额：</p>
                        <p className="ordersDetail-firstContain-price">￥40.40</p>
                    </span>
                    <span>
                        <p>订单状态：</p>
                        <p className="ordersDetail-firstContain-status">待付款</p>
                    </span>
                    <span>
                        <p>配送日期：</p>
                        <p>2017-06-20 09:00~21:00</p>
                    </span>
                </div>
                <ul className="ordersDetailUl">
                    {data&&data.addressuseraddressDefault=='1' ? <li className="ordersDetailLi">
                        <Link to="address" className="ordersDetailLink">
                            <span className="ordersDetailName">{data&&data.addressusername}</span>
                            <span className="ordersDetailPhone">{data&&data.addressuserphone}</span>
                            <span className="ordersDetailSit">{data&&data.addresssheng}{data&&data.addressusercity}{data&&data.addressuserqu}{data&&data.addressuseraddress}</span>{data&&data.addressuseraddressDefault == '1' ? <span className="ordersDetailDefault">默认</span> : '' }
                        </Link>
                    </li> : <Link to="/address" className="addAddressMsgLink">
                        <span className="addAddressMsgSpan1">+</span>
                        <span className="addAddressMsgSpan2">点击设置默认地址</span>
                    </Link> }
                    
                </ul>
                <div className="ordersDetailsLogistics">
                    <Link to="/ordersDetailsLogistics" className="ordersDetailsLogisticsTop">
                        <span>物流信息</span>
                        <i className="iconfont icon-tishi"></i>
                    </Link>
                    <div className="ordersDetailsLogisticsBody">
                        <span>您提交了订单，请等待客服审核。</span>
                        <span>2017-06-10 23:20:26</span>
                    </div>
                </div>
                <div className="ordersDetail-body-box">
                    <ul>
                        <li>
                            <div className="ordersDetail-body-box-top">
                                <span>共1件商品</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="/details" className="detailsProduct">
                                        <img src="../../src/static/images/myGzxOrder/myGzxOrder-0.jpg" className="ordersDetail-body-box-top-img" alt=""/>
                                        <div className="ordersDetail-body-box-top-right">
                                            <span className="ordersDetailProductName">丹麦皇冠天然谷饲猪肋排400g</span>
                                            <span className="ordersDetailProductOther">
                                                <span className="ordersDetailProductPrice">￥38.00</span>
                                                <span className="ordersDetailProductNum">&times; 1</span>
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="ordersDetail-invoice">
                    <span>发票信息</span>
                    <span>不需要发票</span>
                </div>
                <div className="ordersDetailOtherMsg">
                    <div>
                        <span>
                            <p>商品合计</p>
                            <p>￥38.00</p>
                        </span>
                        <span>
                            <p>运费</p>
                            <p>￥10.00</p>
                        </span>
                        <span>
                            <p>活动优惠</p>
                            <p>-￥7.60</p>
                        </span>
                    </div>
                    <span>
                        <p>应付金额</p>
                        <p>￥40.40</p>
                    </span>
                </div>
                <div className="ordersDetailPayWay">
                    <span>
                        <p>支付方式</p>
                        <p>{window.localStorage.getItem('payment') ? window.localStorage.getItem('payment') : <p>支付宝</p> }</p>
                    </span>
                </div>
                <div className="ordersDetail-body-box-bottom">
                    <span>应付：￥40.40</span>
                    <button>去支付</button>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    //loading: state.ordersDetail.loading
    datas:state.ordersDetail.datas
})
export default connect(mapStateToProps, ordersDetailAction)(OrdersDetailComponent)

//export default OrdersDetailComponent