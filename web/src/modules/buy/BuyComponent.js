// var React = require('react')
// var Component = React.Component;
// var React, {Component} = require('react');

// var ReactRouter = require('react-route');

// var {Router, Route, Link} = ReactRouter

// var Router = ReactRouter.Router
// var Route = ReactRouter.Route
// var Link = ReactRouter.Link

// import {Router, Route, Link} from 'React-Router'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as BuyAction from './BuyAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import { Router, Route, hashHistory, Link} from 'react-router'
import Banner from './banner.js'
import './Buy.scss'

// @connect(
//     state => ({
//         loading: state.login.loading
//     }),
//     loginActions
// )

class BuyComponent extends React.Component {
    constructor(props){
        super(props)
    }
    loginHandler(){
        // console.log(loginActions)
        // this.router.push('register')
        // if(!this.refs.username){
        //     //show up dialog => username cannot empty
        //     return
        // } else if(!this.refs.password){
        //     //show up dialog => password cannot empty
        //     return 
        // }
        
        this.props.login(this.refs.username.value, this.refs.password.value)
       console.log(this.props)
    }
    decrement(event){
        if(Number( event.target.nextElementSibling.value)<=1) {
            alert("不能少于1个哦");
        event.target.nextElementSibling.value=1
        }else{

        event.target.nextElementSibling.value=Number(event.target.nextElementSibling.value)-1
        }
    }
    increment(event){
        event.target.previousElementSibling.value=Number(event.target.previousElementSibling.value)+1

    }
    componentWillMount(){
        let buy = 'buy';
        // console.log(this.props.location.query)
        let obj = this.props.location.query;
        this.props.buy(obj,buy)

    }
    render(){
        console.log(this.props.data)
        let data;
        for(let attr in this.props.data){
            attr == 'data' ? data=this.props.data[attr] : data=[];
        }
        let photo;
        if(Array.isArray(data)){
            // console.log(data)
            data.forEach((item)=>{
                for(let attr in item){
                    if(attr == 'photo'){
                        photo = JSON.parse(item[attr])
                    }
                }
            })
        }
        console.log(data)
        // let bannerObj = [];
        // let banner1 = {};
        // let banner2 = {};
        // let banner3 = {};
        // if(Array.isArray(banner)){
        //     banner1.src = banner[0];
        //     banner2.src = banner[1];
        //     banner3.src = banner[2];
        //     bannerObj.push(banner1);
        //     bannerObj.push(banner2)
        //     bannerObj.push(banner3)
        // }
        
        // console.log(data)
        return(
        <div>
            <div className="wrap">
                {
                    Array.isArray(data) && data.map((item)=>{

                        return <div><div className="header">
                                <a href="javascript:history.back(-1)" className="return"></a>
                                <div className="lunbo">
                                    
                                    <div className="img">
                                        <img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)} alt="" />
                                    </div>
                                </div>
                                <div className="lunbo-foot">
                                    <div className="lunbo-botton">
                                        <span className="lunbo-btn"></span>
                                        <span className="lunbo-btn"></span>
                                        <span className="lunbo-btn"></span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-info">
                                    <div className="product-name">
                                        {item.goodTitle}
                                    </div>
                                    <div className="product-price">
                                        ￥
                                        <span className="price">{item.newPrice}</span>
                                    </div>
                                    <div className="quantity">
                                        <input id="decrement" value="-" type="button" onClick={this.decrement.bind(this)}/>
                                        <input id="txtProductCount" className="itxt" ref="num" value="1" type="text" />
                                        <input id="increment" value="+" type="button" onClick={this.increment.bind(this)}/>
                                    </div>
                                </div>
                                <div className="product-choose">
                                    <div className="title">规格</div>
                                    <ul>
                                        <li className="active"><a href="" className="detail-first">{item.size1}</a></li>
                                       
                                    </ul>
                                </div>
                                <div className="product-other-wrap">
                                    <div className="product-other">
                                        <p>产地<span> {item.origin}</span></p>
                                        <p>16:00 前完成订单，预计明日(6月14日)送达</p>
                                    </div>
                                </div>
                                <div className="product-Description">
                                    <p className="active">
                                        <span>商品介绍</span>
                                    </p>
                                    <p>
                                        <span>商品属性</span>
                                    </p>
                                </div>
                                {
                                    Array.isArray(photo) && photo.map((items)=>{
                                        return <div className="img">
                                                <img src={require(`../../static/imgs/${items}`)} alt="" />
                                            </div>
                                    })
                                }
                                
                            </div>
                        <div className="shopping-cart">
                            <div className="left">
                                 <Link to='index'>
                                <a href="#" className="home">
                                    <i className="icon1"></i>
                                    首页
                                </a></Link>  
                                <div className="cart">
                                    <a href="#" className="cart-in">
                                        <i className="icon2"></i>
                                        <i className="badge">5</i>
                                        <i>购物车</i>
                                    </a>
                                </div>
                            </div>
                            <div className="right">
                                <a id="btnAddCart">加入购物车</a>
                            </div>
                        </div>
                    </div>
                    })
                }
                
            </div>  
        </div>
            
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading,
    data:state.buy.data
})
export default connect(mapStateToProps, BuyAction)(BuyComponent)
// export default BuyComponent