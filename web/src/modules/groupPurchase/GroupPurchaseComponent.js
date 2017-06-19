import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './GroupPurchaseComponent.scss'




class GroupPurchaseComponent extends React.Component {
    toLastHandler(){
         history.go(-1);
    }
    render() {
        return (
            <div className="groupPurchase">
                <div className="delivery-top">
                    <Link onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>团来团去</h4>
                </div>
               <div className="groupPurchase-body">
                    <span>敬请期待!</span>
               </div>
            </div>
            
        )
    }
}

export default GroupPurchaseComponent