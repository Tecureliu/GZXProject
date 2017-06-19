import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as RegistActions from './RegistAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import MygzxComponent from '../mygzx/MygzxComponent'
import './RegistComponent.scss'

class RegistComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    registHandler() {
        //console.log(this.props)
        if(this.refs.registPassword.value == this.refs.registRepassword.value){
            this.props.regist(this.refs.registPhone.value,this.refs.registUsername.value, this.refs.registPassword.value).then(response => {
                if(response.body.status == true){
                    alert("注册成功！")
                    hashHistory.push('/login')
                }else{
                    alert(response.body.message)
                }
            })
        }else{
            alert("两次输入的密码不一致")
        }
        
        
    }
    registPhoneMethod(){
        console.log(this)
        var _registPhone = this.refs.registPhone.value
        if(_registPhone.length <= 0){
           
        }else if(!/^1[34578]\d{9}$/.test(_registPhone)){
            alert('请输入正确的手机号码')
            document.getElementsByClassName("phone")[0].value = ""
        }
    }
    toLastHandler(){
         history.go(-1);
    }
    render() {
        return (
            <div className="regist">
                <div className="regist-top">
                    <Link onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>用户注册</h4>
                </div>
                <div className="regist-title">
                    <i className="iconfont icon-iconshuiguo"></i>
                </div>
                <ul className="registUl">
                    <li className="registLi">
                        <input type="text" ref="registPhone" placeholder="请输入您的手机" className= "phone" onBlur={this.registPhoneMethod.bind(this)}/>
                        <i className="iconfont icon-tishi"></i>
                    </li>
                    <li className="registLi">
                        <input type="text" ref="registUsername" placeholder="请输入您的用户名" className= "username"/>
                        <i className="iconfont icon-yonghuxingming01"></i>
                    </li>
                    <li className="registLi">
                        <input type="password" ref="registPassword" placeholder="请输入您的密码" className="password"/>
                        <i className="iconfont icon-yuechi"></i>
                    </li>
                    <li className="registLi">
                        <input type="password" ref="registRepassword" placeholder="请再次输入密码" className="repassword"/>
                        <i className="iconfont icon-yuechi"></i>
                    </li>
                </ul>
                <input type="button" value="注册" onClick={this.registHandler.bind(this)} className="registBtn"/>
                <div className="registfr">
                    <Link to="/login" className="registf">已有账号 立即登录</Link>
                </div>
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.regist.loading
})
export default connect(mapStateToProps, RegistActions)(RegistComponent)


 