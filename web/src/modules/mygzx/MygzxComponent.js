import React, {Component} from 'react'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import './MygzxComponent.scss'
import Footer from '../footer/footerComponent.js'

class MygzxComponent extends Component{

    render(){
        return(
            <div className="container">
                
                <div className="top">
                    {localStorage.getItem("data") ? <Link to="/setting" className="mygzx-setting"><i className="iconfont icon-shezhi"></i></Link> : <Link to="/login" className="mygzx-setting"><i className="iconfont icon-shezhi"></i></Link> }
                    
                    <div className="loginregist">
                        
                        {localStorage.getItem("data") ?
                            <div><img src="../../src/static/images/myGzx/touxiang.png"/>
                            <span ref="mygzxLoginStates">欢迎您</span></div> : 
                            <div><i className="iconfont icon-gerenzhongxin"></i>
                            <span className="loginUserPhone">
                                  <Link to="/login">登录/注册</Link>
                            </span></div> }
                        
                    </div>
                    <div className="loginUserMes">
                        <span className="loginUserPhone">{localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")).username : "" }</span>
                        <span>{localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")).phone : "" }</span>
                    </div>
                    
                    <span className="bb yb">悠币：0</span>
                    <span className="bb yue">余额：￥0.00</span>
                </div>
                <div className="mygzx-body">
                    <ul>
                        <li>
                            {localStorage.getItem("data") ? <Link to="/orders" className="mygzx-body-code mygzx-body-code1">
                                <i className="iconfont icon-dingdan"></i>
                                <span>我的订单</span>
                            </Link> : <Link to="/login" className="mygzx-body-code mygzx-body-code1">
                                <i className="iconfont icon-dingdan"></i>
                                <span>我的订单</span>
                            </Link> }
                            
                        </li>
                        <li>
                            {localStorage.getItem("data") ? <Link to="/coupon" className="mygzx-body-code mygzx-body-code2">
                                <i className="iconfont icon-youhuiquan"></i>
                                <span>优惠券</span>
                            </Link> : <Link to="/login" className="mygzx-body-code mygzx-body-code2">
                                <i className="iconfont icon-youhuiquan"></i>
                                <span>优惠券</span>
                            </Link> }
                            
                        </li>
                        <li>
                            {localStorage.getItem("data") ? <Link to="/address" className="mygzx-body-code mygzx-body-code3">
                                <i className="iconfont icon-shouhuodizhi"></i>
                                <span>收货地址</span>
                            </Link> : <Link to="/login" className="mygzx-body-code mygzx-body-code3">
                                <i className="iconfont icon-shouhuodizhi"></i>
                                <span>收货地址</span>
                            </Link> }
                            
                        </li>
                        <li>
                           <Link to="/mygzxKfrx" className="mygzx-body-code mygzx-body-code4">
                                <i className="iconfont icon-kefudianhua"></i>
                                <span>客服电话</span>
                            </Link>
                        </li>
                        <li>
                            {localStorage.getItem("data") ? <Link to="/delivery" className="mygzx-body-code mygzx-body-code5">
                                <i className="iconfont icon-tihuoquan"></i>
                                <span>提货券</span>
                            </Link> : <Link to="/login" className="mygzx-body-code mygzx-body-code5">
                                <i className="iconfont icon-tihuoquan"></i>
                                <span>提货券</span>
                            </Link> }
                           
                        </li>
                        <li>
                            <Link to="/groupPurchase" className="mygzx-body-code mygzx-body-code6">
                                <i className="iconfont icon-wodetuangou"></i>
                                <span>团来团去</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
        
    }
}
export default MygzxComponent


