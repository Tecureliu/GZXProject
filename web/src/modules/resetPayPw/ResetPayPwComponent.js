import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ResetPayPwComponent.scss'

class ResetPayPwComponent extends React.Component {
    toLastHandler(){
         history.go(-1);
    }
    render() {
        return (
            <div className="resetPayPw">
                <div className="resetPayPw-top">
                    <Link onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>设置支付密码</h4>
                </div>
                <div className="resetPayPw-title">
                    <span>为了确保您的果真鲜预存款资金安全</span>
                    <span>请输入绑定的手机尾号3393接收到的短信验证码</span>
                </div>
                <ul className="resetPayPwUl">
                    <li className="resetPayPwLi">
                        <input type="text" placeholder="请输入手机验证码" className= "username" />
                        <i className="iconfont icon-tishi"></i>
                        <input type = "button" className="resetPayPwCode" value="获取验证码"/>
                    </li>
                </ul>
                <input type="button" value="确定" className="resetPayPwBtn"/>
            </div>
        )
    }
}

export default ResetPayPwComponent

 