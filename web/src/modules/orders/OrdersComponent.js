import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ordersActions from './OrdersAction'
import SpinnerComponent from '../spinner/SpinnerComponent'

import './OrdersComponent.scss'




class OrdersComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs:[
                {tabName:"全部",id:1},
                {tabName:"待支付",id:2},
                {tabName:"待收货",id:3},
                {tabName:"待评价",id:4}
            ],
            currentIndex:1,
        }
    }
    
    tabChoiced(id){
        // tab切换的方法
        this.setState({
            currentIndex:id
        });
    }
    toLastHandler(){
         history.go(-1);
    }
    componentWillMount(){
        if(JSON.parse(localStorage.getItem("data"))){
            let phone = JSON.parse(localStorage.getItem("data")).phone
            this.props.ordersCar(phone).then(response => {
                // console.log(response)
            })
        }
    }
    render() {
        var _this=this;
        var isBox1Show=this.state.currentIndex==1 ? 'block' : 'none';
        var isBox2Show=this.state.currentIndex==2 ? 'block' : 'none';
        var isBox3Show=this.state.currentIndex==3 ? 'block' : 'none';
        var isBox4Show=this.state.currentIndex==4 ? 'block' : 'none';

          var tabList= this.state.tabs.map(function(res,index) {
              // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            var tabStyle=res.id==this.state.currentIndex ? 'subCtrl active' : 'subCtrl';

            return    <li key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>{res.tabName}</li>

        }.bind(_this));
        
        
        return (
            <div className="orders-body">
                <div className="orders-top">
                    <Link className="toLastPage" onClick={this.toLastHandler.bind(this)}>
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>我的订单</h4>
                </div>
                <div className="orders-title">
                    <ul className="orders-title-box">
                         {tabList}
                    </ul>
                </div>
                <div className="orders-body-box order-all"  style={{"display":isBox1Show}}>
                    <ul>
                        <li>
                            <div className="orders-body-box-top">
                                <div className="orders-body-box-top-left">
                                    <span className="orders-num">订单流水号：42827687</span>
                                    <span className="orderTime">2017-06-10 23:20:26</span>
                                </div>
                                <div className="orders-body-box-top-right">
                                    <span>等待支付</span>
                                </div>
                            </div>
                            <ul>
                                 {this.props.data && this.props.data.message.data.map(function(item){
                                    let str = "../../src/static/imgs/" + item.img;
                                    return (
                                         <li>
                                            <Link to="/ordersDetail">
                                                <img src={str} alt=""/>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="orders-body-box-bottom">
                                <span>实付：￥40.40</span>
                                <button>去支付</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="orders-body-box order-waiting"  style={{"display":isBox2Show}}>
                    <ul>
                        <li>
                            <div className="orders-body-box-top">
                                <div className="orders-body-box-top-left">
                                    <span className="orders-num">订单流水号：42827687</span>
                                    <span className="orderTime">2017-06-10 23:20:26</span>
                                </div>
                                <div className="orders-body-box-top-right">
                                    <span>等待支付</span>
                                </div>
                            </div>
                            <ul>
                                {this.props.data && this.props.data.message.data.map(function(item){
                                    let str = "../../src/static/imgs/" + item.img;
                                    return (
                                         <li>
                                            <Link to="/ordersDetail">
                                                <img src={str} alt=""/>
                                            </Link>
                                        </li>
                                    )
                                })}
                               
                            </ul>
                            <div className="orders-body-box-bottom">
                                <span>实付：￥40.40</span>
                                <button>去支付</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="orders-body-box order-waitingCollect"  style={{"display":isBox3Show}}>
                    <span>您没有待收货的订单</span>
                </div>
                <div className="orders-body-box order-waitingEvaluate"  style={{"display":isBox4Show}}>
                    <span>您没有待评价的订单</span>
                </div>
                <div className="bottom">
                    <ul>
                        <li>
                            <Link to="/home" className="bottom-gzx bottom-gzx1">
                                <i className="iconfont icon-shouye"></i>
                                <span>首页</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list" className="bottom-gzx bottom-gzx2">
                                <i className="iconfont icon-fenlei"></i>
                                <span>分类</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cfb" className="bottom-gzx bottom-gzx3">
                                <i className="iconfont icon-miantiao-szxdf"></i>
                                <span>吃饭吧</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/car" className="bottom-gzx bottom-gzx4">
                                <i className="iconfont icon-gouwuche"></i>
                                <span>购物车</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/mygzx" className="bottom-gzx bottom-gzx5">
                                <i className="iconfont icon-gerenzhongxin"></i>
                                <span>我的果真鲜</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <SpinnerComponent show={this.props.loading}/>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    // loading: state.ordersCar.loading,
    data:state.ordersCar.datas
})
export default connect(mapStateToProps, ordersActions)(OrdersComponent)

//export default OrdersComponent



{/*<button>全部</button>
<button>待支付</button>
<button>待收货</button>
<button>待评价</button>*/}