import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as findpwActions from './FindpwAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './FindpwComponent.scss'

class FindpwComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    findpwHandler() {
            this.props.findpw(this.refs.findpwUsername.value,this.refs.findpwYzm.value).then(response => {
                console.log(response)
                if(response.body.status == false){
                    alert(response.body.message)
                }else if(response.body.status == true){
                    alert(response.body.message + ":" + response.body.data )
                }
            })
            // console.log(this.props)
    }
    findpwYzmMethod(){
        if(!/\d{6}/.test(this.refs.findpwYzm.value)){
            alert('请输入6位手机验证码')
            document.getElementsByClassName("findpwYzm")[0].value = ""
        }
    }
    toLastHandler(){
         history.go(-1);
    }
    render() {
        return (
            <div className="findpw">
                <div className="findpw-top">
                    <Link onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>找回密码</h4>
                </div>
                <div className="findpw-title">
                    <i className="iconfont icon-iconshuiguo"></i>
                </div>
                <ul className="findpwUl">
                    <li className="findpwLi">
                        <input type="text" ref="findpwUsername" placeholder="请输入您绑定的手机号" className= "username" />
                        <i className="iconfont icon-tishi"></i>
                        <input type="button" value="获取验证码" className="findwpyzm"/>
                    </li>
                    <li className="findpwLi">
                        <input type="text" ref="findpwYzm" placeholder="请输入您的验证码" className= "findpwYzm" onBlur={this.findpwYzmMethod.bind(this)} />
                        <i className="iconfont icon-tishi"></i>
                    </li>
                </ul>
                <input type="button" value="确定" onClick={this.findpwHandler.bind(this)} className="findpwBtn"/>
                
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.findpw.loading
})
export default connect(mapStateToProps, findpwActions)(FindpwComponent)


 