import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
//import * as deliveryActions from './DeliveryAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './DeliveryComponent.scss'

class DeliveryComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    deliveryHandler() {
        // this.props.delivery(this.refs.username.value, this.refs.password.value, this.refs.phone.value).then(response => {
        //     //console.log(response)
        //     if(response.type == "SUCCESS"){
        //         this.props.route.push({
        //             component: MygzxComponent,
        //             title: 'Detail Info',
        //             rightButtonTitle: 'Shopping',
        //         })
        //     }
        // })
        // console.log(this.props)
    }
    toLastHandler(){
         history.go(-1);
    }
    render() {
        return (
            <div className="delivery">
                <div className="delivery-top">
                    <Link onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>提货券</h4>
                </div>
                
                <ul className="deliveryUl">
                    <li className="deliveryLi">
                        <input type="text" ref="username" placeholder="请输入您的提货券号" className= "username" />
                        <i className="iconfont icon-quandan"></i>
                    </li>
                    <li className="deliveryLi">
                        <input type="text" ref="password" placeholder="请输入密码" className="password" />
                        <i className="iconfont icon-yuechi"></i>
                    </li>
                </ul>
                <input type="button" value="确定" onClick={this.deliveryHandler.bind(this)} className="deliveryBtn"/>
                
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     loading: state.delivery.loading
// })
// export default connect(mapStateToProps, deliveryActions)(DeliveryComponent)

export default DeliveryComponent

 