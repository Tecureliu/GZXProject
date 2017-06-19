

import {Link} from 'react-router'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as orderActions from './orderAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import '../../static/styles/common.scss'
import './order.scss'

class orderComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            total : Number(0),
            qty:Number(0),

        };
    }


 componentWillMount(){
       
        this.props.getcartgoods(JSON.parse(localStorage.getItem("data")).phone).then(response=>{
         
            let data = response.body.data
            let cartgoods = []
            data.forEach((item)=>{
                
                cartgoods.push(item)
            })
            if(cartgoods[0]){
                let total = cartgoods.map(item => ((parseFloat(item.newPrice) * Number(item.qty))).toFixed(2)).reduce((prev,cur) => parseFloat(prev) + parseFloat(cur));
                let qty = cartgoods.map(item => Number(item.qty)).reduce((prev,cur) => prev + cur);
                this.setState({
                    total:total,
                    qty:qty
                });
            }
          
        })
    }

    
    runBack() {
        window.history.back()
    }

    addOrders(){
        let phone = JSON.parse(localStorage.getItem("data")).phone;
        let ordersId = String(Math.floor(Math.random()*1000000000000));
        let totalPrice = this.state.total;
        let allqty = this.state.qty;
        // console.log(ordersId,totalPrice,allqty)
        this.props.addOrders(phone,ordersId,totalPrice,allqty);

    }

    render(){
        let data;
        for(let attr in this.props.data){
            attr == 'data' ? data=this.props.data[attr] : data=['数据不存在'];
        }
        let cartgoods=[];
        if(Array.isArray(data)){
            data.forEach((item)=>{
                
                cartgoods.push(item)
            })
    
        }
        return(
            <div className="order_main">
                <div className="order_top">
                <i className="iconfont icon-fanhui order_back" onClick={this.runBack}></i>
                订单结算   
                </div>
                <div className="order_tips">翼支付随机立减 最高立减35元</div>
                <Link to="/addressMsg">
                <div className="order_address">
                    <img src={require(`../../static/images/add4.png`)} className="order_addlogo"/>
                    <p className="order_addresstext">添加收货地址</p>
                    <img src={require(`../../static/images/arrow.png`)} className="order_jiantou"/>
                </div>
                </Link>
                <img src={require(`../../static/images/line.png`)} className="order_line"/>
                <div className="order_shu">共计<span>{this.state.qty}</span>件商品
                    <img src={require(`../../static/images/arrow.png`)} className="order_jiantou1"/>
                </div>
                <div className="order_goodspic">
                {
                    cartgoods.map((item)=>{
                       return <Link to={{pathname:"buy?id="+item.id}}>
                                    <img src={require(`../../static/imgs/${item.img}`)} className="order_pic"/>
                              </Link>
                    })
                } 
                </div>
                <div className="order_xinxi1">
                    <div className="order_pei">配送日期
                        <span className="order_data">09:00~21:00</span>
                        <img src={require(`../../static/images/arrow.png`)} className="order_jiantou2"/>
                    </div>
                    <div className="order_fa">发票信息
                        <span className="order_yao">不需要</span>
                        <img src={require(`../../static/images/arrow.png`)} className="order_jiantou3"/>
                    </div>
                    <div className="order_liu">留言：
                        <input type="text" className="order_liuyan" placeholder="如有特殊要求，请在此留言"/>
                    </div>
                    <div className="order_quan">优惠券
                        <span className="order_shuliang">2</span>
                        <span className="order_manzu">不满足条件使用</span>
                        <img src={require(`../../static/images/arrow.png`)} className="order_jiantou4"/>
                    </div>
                    <div className="order_price">
                        <div className="order_pricexinxi">
                            <p className="order_sum">商品合计<span className="order_sumtxt">{this.state.total}</span></p>
                            <p className="order_yun">运费<span className="order_yuntxt">0</span></p>
                        </div>
                        <div className="order_pricefu">
                            <p className="order_fu">应付金额<span className="order_futxt">{this.state.total}</span></p>
                        </div>
                    </div>
                    <div className="order_dixian">
                        <span className="order_dixiantxt">U币抵现</span>
                        <img src={require(`../../static/images/now.png`)} className="order_tanhao"/>
                        <span className="order_dixiantxt1">可用100U币抵</span>
                        <img src={require(`../../static/images/on.png`)} className="order_button"/>
                    </div>
                    <div className="order_jiesuan">
                        <span className="order_yingfu">应付金额</span>
                        <span className="order_yingfutxt">{this.state.total}</span>
                        <Link to="/choosePayment">
                        <span className="order_jiesuantxt" onClick={this.addOrders.bind(this)}>结算</span>
                        </Link>
                    </div>
                </div>
                
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.order.loading,
    data:state.order.data
})
export default connect(mapStateToProps, orderActions)(orderComponent)
