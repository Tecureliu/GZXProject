import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ChangePhoneComponent.scss'




class ChangePhoneComponent extends React.Component {
    
    render() {
        return (
            <div className="changePhone">
               <div className="changePhone-body">
                    <div className="changePhone-body-top">
                        <span>为了您的账号和资金安全，请您到</span>
                        <span>果真鲜APP上绑定或更换手机</span>
                    </div>
                    <div className="changePhone-body-bottom">
                        <Link to="/changePhone" className="changePhone-body-bottom-left">打开APP</Link>
                        <Link to="/setting" className="changePhone-body-bottom-right">知道了</Link>
                    </div>
               </div>
            </div>
            
        )
    }
}

export default ChangePhoneComponent