import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as addressAction from './AddressAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import FooterComponent from '../footer/footerComponent.js'
//import FindpwComponent from './modules/findpw/FindpwComponent'
//import RegistComponent from './modules/regist/RegistComponent'
import './AddressComponent.scss'




class AddressComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount(){
        if(JSON.parse(localStorage.getItem("data"))){
            let phone = JSON.parse(localStorage.getItem("data")).phone
            this.props.address(phone)
            // .then(response => {
            //     //console.log(response.body.message.data)
            //     response.body.message.data.map(function(obj){
            //         //console.log(typeof obj)
            //         if(obj.addressuseraddressDefault=='1'){
            //             obj = JSON.stringify(obj)
            //             window.localStorage.setItem("defaultAddress",obj) 
            //         }
            //     })
            // })
        }
        //console.log(JSON.parse(localStorage.getItem("addressMsg")))
    }
    componentDidMount() {
        // console.log(localStorage.getItem("addressMsg"))
        
        
      
    }
    clicResetAddress(){
         //onClick={this.clicResetAddress.bind(this)}
    }
    toLastHandler(){
         history.back();
    }
    render() {
        //console.log(this.props)
        // console.log(window.addressArr)
        // console.log(this.props.addressDom.message)
        let message = this.props.addressDom.message;
        let data =[];
        for(let attr in message){
            if(attr =='data'){
                data = message[attr];
            }
        }
        return (
            <div className="address-body">
                <div className="address-top">
                    <Link className="toLastPage" onClick={this.toLastHandler.bind(this)}>
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>我的地址</h4>
                </div>
                <div className="address-body-main">
                    <Link to="/addressMsg" className="addAddressMsgLink">
                        <span className="addAddressMsgSpan1">+</span>
                        <span className="addAddressMsgSpan2">新增收货地址</span>
                        <i className="iconfont icon-tishi1"></i>
                    </Link>
                    <ul className="addressUl" onClick={this.clicResetAddress.bind(this)}>
                        {
                            data.map(function(obj){
                                return <li className="addressLi" >
                                        <Link to={{ pathname: "addressMsgNow/:id", query: {myDate: obj.myDate}}} className="addressLink">
                                            <span className="addressName">{obj.addressusername}</span>
                                            <span className="addressPhone">{obj.addressuserphone}</span>
                                            <span className="addressSit">{obj.addresssheng}{obj.addressusercity}{obj.addressuserqu}{obj.addressuseraddress}</span>
                                            {obj.addressuseraddressDefault == '1' ? <span className="addressDefault">默认</span> : '' }
                                        </Link>
                                    </li>
                            })
                        }
                    </ul>
                </div>
                <FooterComponent/>
                <SpinnerComponent show={this.props.loading}/>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    loading: state.address.loading,
    addressDom: state.address.address
})
export default connect(mapStateToProps, addressAction)(AddressComponent)

// export default AddressComponent