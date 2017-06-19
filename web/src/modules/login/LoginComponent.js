import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import MygzxComponent from '../mygzx/MygzxComponent'
//import FindpwComponent from './modules/findpw/FindpwComponent'
//import RegistComponent from './modules/regist/RegistComponent'
import './LoginComponent.scss'

class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.createCode();
    }
    loginHandler() {
        this.props.login(this.refs.username.value, this.refs.password.value, this.refs.verificationCode.value).then(response => {

            if(response.body.status == true){
                hashHistory.push('/mygzx')
                
                var obj = JSON.stringify(response.body.message.data[0]);
                localStorage.setItem("data",obj)
                //console.log(JSON.parse(localStorage.getItem("data")))
            }else{
                alert(response.body.message)
                this.createCode()
                
            }
        })
        
        //console.log(this.props)
    }
    
    createCode(){
        var code = "";   
        var codeLength = 4;//验证码的长度  
        var checkCode = document.getElementById("code");   
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
        'S','T','U','V','W','X','Y','Z');//随机数  
        for(var i = 0; i < codeLength; i++) {//循环操作  
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
            code += random[index];//根据索引取得随机数加到code上  
        }  
        checkCode.value = code;//把code值赋给验证码  
        
    }
    validate(){
        
        var inputCode = document.getElementsByClassName("verificationCode")[0].value.toUpperCase(); //取得输入的验证码并转化为大写    
        if(inputCode.length <= 0) { //若输入的验证码长度为0  
            alert("请输入验证码!"); //则弹出请输入验证码 
        }         
        else if(inputCode != code.value ) { //若输入的验证码与产生的验证码不一致时  
            alert("验证码输入错误!"); //则弹出验证码输入错误  
            this.createCode();//刷新验证码  
            document.getElementsByClassName("verificationCode")[0].value = "";//清空文本框  
        }         
        else { //输入正确时  
            //alert("^-^"); //弹出^-^  
        }             
    }


    render() {
        return (
            <div className="login">
                <div className="login-top">
                    <Link to="/mygzx" className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>登录果真鲜</h4>
                </div>
                <div className="login-title">
                    <span>GUOZX</span>
                </div>
                <ul className="loginUl">
                    <li className="loginLi">
                        <input type="text" ref="username" placeholder="请输入您的用户名" className= "username" />
                        <i className="iconfont icon-yonghuxingming01"></i>
                    </li>
                    <li className="loginLi">
                        <input type="text" ref="password" placeholder="请输入您的密码" className="password" />
                        <i className="iconfont icon-yuechi"></i>
                    </li>
                    <li className="loginLi">
                        <input type="text" ref="verificationCode" placeholder="请输入验证码" className="verificationCode" onBlur={this.validate.bind(this)}/>
                        <i className="iconfont icon-tishi"></i>
                        <input type = "button" id="code" onClick={this.createCode.bind(this)}/>
                    </li>
                </ul>
                <input type="button" value="登录" onClick={this.loginHandler.bind(this)} className="loginBtn"/>
                <div className="loginfr">
                    <Link to="/findpw" className="loginf">忘记密码？</Link>
                    <Link to="/regist" className="loginr">立即注册</Link>
                </div>
                <p className="hzzhdl">--------合作账号登录--------</p>
                <div className="loginfx">
                    <i className="iconfont icon-yduitengxunqq"></i>
                    <i className="iconfont icon-weixin"></i>
                </div>
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading
})
export default connect(mapStateToProps, loginActions)(LoginComponent)


 