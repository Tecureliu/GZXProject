import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
//import * as settingActions from './SettingAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import FooterComponent from '../footer/footerComponent.js'

//import FindpwComponent from './modules/findpw/FindpwComponent'
//import RegistComponent from './modules/regist/RegistComponent'
import './SettingComponent.scss'




class SettingComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    registHandler() {
        localStorage.removeItem("data")
        localStorage.removeItem("addressDefault")
        localStorage.removeItem("addressMsg")
        hashHistory.push('/mygzx')
    }
    toLastHandler(){
         history.go(-1);
    }
    render() {
        return (
            <div className="setting-body">
                <div className="setting-top">
                    <Link onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>设置</h4>
                </div>
                <ul className="settingUl">
                    <li>
                        <Link to="/mygzxKfrx" className="settingLink">
                            <span>客服热线</span>
                            <span>400-888-8888</span>
                            <i className="iconfont icon-tishi1"></i>
                        </Link>
                    </li>
                
                    <li>
                        <Link to="/resetLoginPw" className="settingLink">
                            <span>修改登录密码</span>
                            <span></span>
                            <i className="iconfont icon-tishi1"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resetPayPw" className="settingLink">
                            <span>设置支付密码</span>
                            <span></span>
                            <i className="iconfont icon-tishi1"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/changePhone" className="settingLink">
                            <span>更换手机号码</span>
                            <span>{localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")).phone : "" }</span>
                            <i className="iconfont icon-tishi1"></i>
                        </Link>
                    </li>
                
                    <li>
                        <Link to="/aboutUs" className="settingLink">
                            <span>关于我们</span>
                            <span></span>
                            <i className="iconfont icon-tishi1"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sendIntroductions" className="settingLink">
                            <span>配送说明</span>
                            <span></span>
                            <i className="iconfont icon-tishi1"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/changingOrRefundingIntroductions" className="settingLink">
                            <span>退换货说明</span>
                            <span></span>
                            <i className="iconfont icon-tishi1"></i>
                        </Link>
                    </li>
                </ul>
                <input type="button" value="退出登录" onClick={this.registHandler.bind(this)} className="registBtn"/>
                <FooterComponent/>
                <SpinnerComponent show={this.props.loading}/>
            </div>
            
        )
    }
}

// const mapStateToProps = state => ({
//     loading: state.regist.loading
// })
// export default connect(mapStateToProps, registActions)(SettingComponent)

export default SettingComponent