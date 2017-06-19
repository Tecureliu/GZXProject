import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as addressMsgActions from './AddressMsgAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './AddressMsgComponent.scss'


import './city.js'
import CityComponent from './cityComponent'




class AddressMsgComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    addressMsgHandler() {

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
        var img3 = document.getElementsByClassName('useraddresslx-gsjt-defaul-img')[0]
        console.log(img1.src)
        if(img1.src == "http://10.3.133.21:3002/src/static/images/myGzxOrder/check-on.png"){
            addressuseraddresslx = "公司"
        }else if(img2.src = "http://10.3.133.21:3002/src/static/images/myGzxOrder/check-on.png"){
            addressuseraddresslx = "家庭"
        }
        var time = new Date();
        var myDate = time.getTime()
        //myDate = myDate.toLocaleDateString()+' '+myDate.toLocaleTimeString()
        //console.log(myDate)
        // console.log('名字'+ addressusername)
        // console.log('电话'+ addressuserphone)
        // console.log('当前用户登录电话'+ phone)
        //console.log('省'+ addresssheng)
        //console.log('市'+ addressusercity)
        //console.log('区'+ addressuserqu)
        // console.log('详细地址'+ addressuseraddress)
        // console.log('类型' + addressuseraddresslx)
        console.log('当前时间' + myDate)
        var addressuseraddressDefault
        // console.log(img3.src == 'http://10.3.133.21:3002/src/static/images/myGzxOrder/default-on.png')
        
        if(img3.src == 'http://10.3.133.21:3002/src/static/images/myGzxOrder/default-on.png'){
            addressuseraddressDefault = '1'
            // console.log(111);
            this.props.addressMsgSetDefault(addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate, addressuseraddressDefault).then(response => {
                // console.log(response.type)
                if(!response.body.status){
                    alert(response.body.message)
                    return false;
                }
                if(response.type == 'SUCCESS'){
                    console.log(response)
                    var obj = JSON.stringify(response.query);
                    localStorage.setItem("addressMsg",obj);
                    location.href = 'index.html#/address'
                    // console.log(location.href.slice(38,))
                    // location.reload() 
                    
                }
            })
        }else if(img3.src == 'http://10.3.133.21:3002/src/static/images/myGzxOrder/default-close.png'){
            this.props.addressMsgSetNoDefault(addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate, addressuseraddressDefault).then(response => {
                if(response.type == 'SUCCESS'){
                    // console.log(response)
                    var obj = JSON.stringify(response.query);
                    localStorage.setItem("addressMsg",obj);
                    hashHistory.push('/address');
                    // location.reload() 
                }
                
            })
        }



    }
    userAddressMethodGs1(){
        var img1 = document.getElementsByClassName('useraddresslx-gsjt-com-img')[0]
        var img2 = document.getElementsByClassName('useraddresslx-gsjt-fam-img')[0]
        img1.setAttribute('src',"../../src/static/images/myGzxOrder/check-on.png")
        img2.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
    }
    userAddressMethodGs2(){
        var img1 = document.getElementsByClassName('useraddresslx-gsjt-com-img')[0]
        var img2 = document.getElementsByClassName('useraddresslx-gsjt-fam-img')[0]
        img1.setAttribute('src',"../../src/static/images/myGzxOrder/check-close.png")
        img2.setAttribute('src',"../../src/static/images/myGzxOrder/check-on.png")
    }
    setAddressToDefaultMethod(){
        var img3 = document.getElementsByClassName('useraddresslx-gsjt-defaul-img')[0]
        //console.log(img3.src)
        if(img3.src == "http://10.3.133.21:3002/src/static/images/myGzxOrder/default-on.png"){
            img3.setAttribute('src',"../../src/static/images/myGzxOrder/default-close.png")
        }else{
            img3.setAttribute('src',"../../src/static/images/myGzxOrder/default-on.png")
        }
    }
    addressMsgPhoneMethod(){
        //console.log(this)
        var _addressuserphone = this.refs.addressuserphone.value
        if(_addressuserphone.length <= 0){
           
        }else if(!/^1[34578]\d{9}$/.test(_addressuserphone)){
            alert('请输入正确的手机号码')
            document.getElementsByClassName("addressuserphone")[0].value = ""
        }
    }
    toLastHandler(){
          history.go(-1);
    }
    render() {
        return (
            <div className="addressMsg">
                <div className="addressMsg-top">
                    <Link  onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>新增收货地址</h4>
                </div>
                
                <ul className="addressMsgUl">
                    <li className="addressMsgLi">
                        <input type="text" ref="addressusername" className= "addressusername" required/>
                        <span>收件人姓名：</span>
                    </li>
                    <li className="addressMsgLi">
                        <input type="text" ref="addressuserphone" className= "addressuserphone" required onBlur={this.addressMsgPhoneMethod.bind(this)}/>
                        <span>手机号码：</span>
                    </li>
                    <CityComponent/>
                    
                    <li className="addressMsgLi">
                        <input type="text" ref="addressuseraddress" className="addressuseraddress" required/>
                        <span>详细地址：</span>
                    </li>
                    <li className="addressMsgLi">
                        <span type="text" className="useraddresslx"></span>
                        <span>地址类型：</span>
                        <div className="useraddresslx-gsjt">
                            <img src="../../src/static/images/myGzxOrder/check-on.png" className="useraddresslx-gsjt-com-img" onClick={this.userAddressMethodGs1.bind(this)}/>
                            <span className="useraddresslx-gsjt-com">公司</span>
                            <img src="../../src/static/images/myGzxOrder/check-close.png" className="useraddresslx-gsjt-fam-img" onClick={this.userAddressMethodGs2.bind(this)}/>
                            <span className="useraddresslx-gsjt-fam">家庭</span>
                        </div>
                    </li>
                </ul>
                <div className="setAddressToDefaultDiv">
                    <span>设为默认地址</span>
                    <img src="../../src/static/images/myGzxOrder/default-on.png" className="useraddresslx-gsjt-defaul-img"  onClick={this.setAddressToDefaultMethod.bind(this)}/>
                </div>
                <input type="button" value="保存地址" onClick={this.addressMsgHandler.bind(this)} className="addressMsgBtn"/>
                
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.addressMsg.loading
})
export default connect(mapStateToProps, addressMsgActions)(AddressMsgComponent)


