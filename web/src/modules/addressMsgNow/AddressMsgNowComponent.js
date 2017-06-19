import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as addressMsgNowActions from './AddressMsgNowAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './AddressMsgNowComponent.scss'

import './city.js'
import CityComponent from './cityComponent'


class AddressMsgNowComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    
    addressMsgNowHandler() {
        var addressusername = this.refs.addressusername.value
        var addressuserphone = this.refs.addressuserphone.value
        var phone = JSON.parse(localStorage.getItem("data")).phone
        var addresssheng = window.sessionStorage.getItem("sheng")
        var addressusercity = window.sessionStorage.getItem("city")
        var addressuserqu = window.sessionStorage.getItem("county")
        var addressuseraddress = this.refs.addressuseraddress.value
        var addressuseraddresslx
        var img1 = document.getElementsByClassName('useraddresslx-gsjt-com-img')[0]
        var img2 = document.getElementsByClassName('useraddresslx-gsjt-fam-img')[0]
        if(img1.src == "http://localhost:3002/src/static/images/myGzxOrder/check-on.png"){
            addressuseraddresslx = "公司"
        }else if(img2.src = "http://localhost:3002/src/static/images/myGzxOrder/check-on.png"){
            addressuseraddresslx = "家庭"
        }
        
        var myDate = window.sessionStorage.getItem("myDate")
        // var time = new Date();
        // var myDate = time.getTime()
        // console.log('当前时间' + myDate)
        var img3 = document.getElementsByClassName('useraddresslx-gsjt-defaul-img')[0]
        var addressuseraddressDefault
        if(img3.src == 'http://localhost:3002/src/static/images/myGzxOrder/default-on.png'){
            addressuseraddressDefault = '1'
            //console.log('默认');
            this.props.addressMsgDqDefault(addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate,addressuseraddressDefault).then(response => {
                //console.log(response)
                if(!response.body.status){
                    alert(response.body.message)
                    return false;
                }
                if(response.type == 'SUCCESS'){
                    alert(response.body.message)
                    var obj = JSON.stringify(response.query);
                    localStorage.setItem("addressMsg",obj);
                    location.href = 'index.html#/address'
                }
            })
        }else if(img3.src == 'http://localhost:3002/src/static/images/myGzxOrder/default-close.png'){
            addressuseraddressDefault = '0'
            //console.log('非默认');
            this.props.addressMsgDqNoDefault(addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate,addressuseraddressDefault).then(response => {
                //  console.log(response)
                if(!response.body.status){
                        alert(response.body.message)
                        return false;
                }
                if(response.type == 'SUCCESS'){
                    alert(response.body.message)
                    var obj = JSON.stringify(response.query);
                    localStorage.setItem("addressMsg",obj);
                    location.href = 'index.html#/address'
                }
            })
        }

        
    }
    userAddressMethodGs11(){
        var img1 = document.getElementsByClassName('useraddresslx-gsjt-com-img')[0]
        var img2 = document.getElementsByClassName('useraddresslx-gsjt-fam-img')[0]
        img1.setAttribute('src',"../../src/static/images/myGzxOrder/check-on.png")
        img2.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
    }
    userAddressMethodGs22(){
        var img1 = document.getElementsByClassName('useraddresslx-gsjt-com-img')[0]
        var img2 = document.getElementsByClassName('useraddresslx-gsjt-fam-img')[0]
        img1.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        img2.setAttribute('src',"../../src/static/images/myGzxOrder/check-on.png")
    }
    setAddressToDefaultMethod(){
        var img3 = document.getElementsByClassName('useraddresslx-gsjt-defaul-img')[0]
        //console.log(img3.src)
        if(img3.src == "http://localhost:3002/src/static/images/myGzxOrder/default-on.png"){
            img3.setAttribute('src',"../../src/static/images/myGzxOrder/default-close.png")
        }else{
            img3.setAttribute('src',"../../src/static/images/myGzxOrder/default-on.png")
        }
        var addressuseraddressDefault
        if(img3.src == "http://localhost:3002/src/static/images/myGzxOrder/default-on.png"){
            localStorage.setItem("addressDefault",'1')
        }else{
            localStorage.setItem("addressDefault",'0')
        }
        //console.log(localStorage.getItem("addressDefault"))

    }
    componentDidMount(){
        
        //console.log(this.props.location.search.split('=')[1])
        var locationCs = this.props.location.search.split('=')[1]
        this.props.addressMsgDq(locationCs).then(response => {
            var res = response.body.message.data[0]
            console.log(response)
            this.refs.addressusername.value = res.addressusername
            this.refs.addressuserphone.value = res.addressuserphone
            this.refs.addressuseraddress.value = res.addressuseraddress
            var myDate = res.myDate
            window.sessionStorage.setItem("myDate" ,myDate)
            var addresssheng = res.addresssheng
            window.sessionStorage.setItem("sheng" ,addresssheng)
            var addressusercity = res.addressusercity
            window.sessionStorage.setItem("city", addressusercity)
            var addressuserqu = res.addressuserqu
            window.sessionStorage.setItem("county", addressuserqu)

            var addressuseraddresslx = res.addressuseraddresslx
            var img1 = document.getElementsByClassName('useraddresslx-gsjt-com-img')[0]
            var img2 = document.getElementsByClassName('useraddresslx-gsjt-fam-img')[0]
            var img3 = document.getElementsByClassName('useraddresslx-gsjt-defaul-img')[0]
            if(addressuseraddresslx == '家庭'){
                img1.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
                img2.setAttribute('src',"../../src/static/images/myGzxOrder/check-on.png")
            }else if(addressuseraddresslx == '公司'){
                img1.setAttribute('src',"../../src/static/images/myGzxOrder/check-on.png")
                img2.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
            }
            var addressuseraddressDefault = res.addressuseraddressDefault
            if(addressuseraddressDefault = '0'){
                img3.setAttribute('src',"../../src/static/images/myGzxOrder/default-close.png")
            }else if(addressuseraddressDefault = '1'){
                img3.setAttribute('src',"../../src/static/images/myGzxOrder/default-on.png")
            }
            
        })

    }
    toLastHandler(){
          history.go(-1);
    }
    render() {
        return (
            <div className="addressMsgNow">
                <div className="addressMsgNow-top">
                    <Link  onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>编辑收货地址</h4>
                </div>
                
                <ul className="addressMsgNowUl">
                    <li className="addressMsgNowLi">
                        <input type="text" ref="addressusername" className= "username"/>
                        <span>收件人姓名：</span>
                    </li>
                    <li className="addressMsgNowLi">
                        <input type="text" ref="addressuserphone" className= "userphone" required/>
                        <span>手机号码：</span>
                    </li>
                    <CityComponent/>
                    <li className="addressMsgNowLi">
                        <input type="text" ref="addressuseraddress" className="useraddress" required/>
                        <span>详细地址：</span>
                    </li>
                    <li className="addressMsgNowLi">
                        <span type="text" className="useraddresslx"></span>
                        <span>地址类型：</span>
                        <div className="useraddresslx-gsjt">
                            <img src="../../src/static/images/myGzxOrder/check-on.png" onClick={this.userAddressMethodGs11.bind(this)}  className="useraddresslx-gsjt-com-img"/>
                            <span className="useraddresslx-gsjt-com">公司</span>
                            <img src="../../src/static/images/myGzxOrder/check-close.png" onClick={this.userAddressMethodGs22.bind(this)} className="useraddresslx-gsjt-fam-img"/>
                            <span className="useraddresslx-gsjt-fam">家庭</span>
                        </div>
                    </li>
                </ul>
                <div className="setAddressToDefaultDiv">
                    <span>设为默认地址</span>
                    <img src="../../src/static/images/myGzxOrder/default-on.png" className="useraddresslx-gsjt-defaul-img" onClick={this.setAddressToDefaultMethod.bind(this)}/>
                </div>
                <input type="button" value="保存地址" onClick={this.addressMsgNowHandler.bind(this)} className="addressMsgNowBtn"/>
                
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.addressMsgNow.loading
})
export default connect(mapStateToProps, addressMsgNowActions)(AddressMsgNowComponent)


 