import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as resetLoginPw from './ResetLoginPwAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './resetLoginPwComponent.scss'

class ResetLoginPwAction extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    resetLoginPwHandler() {
        var phone = JSON.parse(localStorage.getItem("data")).phone
        //console.log(phone)
        if(this.refs.password.value == JSON.parse(localStorage.getItem("data")).password){
            this.props.resetLoginPw(phone, this.refs.password.value, this.refs.resetpassword.value).then(response => {
                alert(response.body.message)
                history.go(-1);
            })
        }else{
            alert('您的原密码输入有误')
        }
    }
    toLastHandler(){
         history.go(-1);
    }
    render() {
        return (
            <div className="resetLoginPw">
                <div className="resetLoginPw-top">
                    <Link onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>修改密码</h4>
                </div>
                <div className="resetLoginPw-title">
                    <i className="iconfont icon-iconshuiguo"></i>
                </div>
                <ul className="resetLoginPwUl">
                    <li className="resetLoginPwLi">
                        <input type="text" ref="password" placeholder="原密码" className= "password" />
                        <i className="iconfont icon-tishi"></i>
                    </li>
                    <li className="resetLoginPwLi">
                        <input type="text" ref="resetpassword" placeholder="请输入您的密码" className="resetpassword" />
                        <i className="iconfont icon-yuechi"></i>
                    </li>
                    <li className="resetLoginPwLi">
                        <input type="text" ref="resurepassword" placeholder="请再次输入密码" className="resurepassword"/>
                        <i className="iconfont icon-yuechi"></i>
                    </li>
                </ul>
                <input type="button" value="确定" onClick={this.resetLoginPwHandler.bind(this)} className="resetLoginPwBtn"/>
                
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.resetLoginPw.loading
})
export default connect(mapStateToProps, resetLoginPw)(ResetLoginPwAction)



 