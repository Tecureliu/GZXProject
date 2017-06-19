

import {Link} from 'react-router'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as cartActions from './cartAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import '../../static/styles/common.scss'
import './cart.scss'
import Footer from '../footer/footerComponent.js'
import {hashHistory} from 'react-router'

class cartComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            total : Number(0),
            difference: Number(100),
        };
    }




    //加载数据库数据
    componentWillMount(){
        // this.props.fetchGoods().then(response=>{
        //     console.log(response)
        // })
        //判断是否已经登录，若是没有登录直接跳到登录页面
        let cart = 'cart';
        !localStorage.getItem("data") ? 
        hashHistory.push('login') : this.props.getcartgoods(JSON.parse(localStorage.getItem("data")).phone,cart).then(response=>{
            // console.log(response)
            
            let data = response.body.data
            let cartgoods = []
            data.forEach((item)=>{
                
                cartgoods.push(item)
            })
            if(cartgoods[0]){
                let total = cartgoods.map(item => ((parseFloat(item.newPrice) * Number(item.qty))).toFixed(2)).reduce((prev,cur) => parseFloat(prev) + parseFloat(cur));
                let difference = 100- total;
                    if(difference>0){
                        difference = difference;
                    }else if(difference<0){
                        difference = 0;
                    }
                this.setState({
                    total:total,
                    difference:difference
                });
            }
          
        })
    }
    // 无商品 显示去逛逛
    componentDidUpdate(){

         if(!this.props.data.data[0]){
            this.refs.empty.style.display='block';
            this.refs.notEmpty.style.display='none';
        }else{
            this.refs.empty.style.display='none';
            this.refs.notEmpty.style.display='block';
        }
    }
    返回上一页
    runBack() {
        window.history.back()
    }



   


    //点击减少数量
    cutNum(id,qty) {
       
        
         if(qty > 1){
                    qty -= 1;
                }else{
                   qty = 1;
                }
        // console.log(qty)
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


        cartgoods.forEach(item =>{
            if(item.id === id){
                if(item.qty > 1){
                    item.qty -= 1;
                }else{
                    item.qty = 1;
                }
            }
        })
        
        let total = cartgoods.map(item => ((parseFloat(item.newPrice) * Number(item.qty))).toFixed(2)).reduce((prev,cur) => parseFloat(prev) + parseFloat(cur));
        let difference = 100- total;
            if(difference>0){
                difference = difference;
            }else if(difference<0){
                difference = 0;
            }
        this.setState({
            total,
            difference
        });

        this.props.updateqty(id,qty)
    }
    //点击增加数量
    addNum(id,qty) {
        if(qty >= 1){
            ++qty;
            }
        // console.log(qty)
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


        cartgoods.forEach(item =>{
            if(item.id == id){
                item.qty = Number(item.qty) + 1 + '';
            }
        })
        let total = cartgoods.map(item => ((parseFloat(item.newPrice) * Number(item.qty))).toFixed(2)).reduce((prev,cur) => parseFloat(prev) + parseFloat(cur));
        let difference = 100- total;
            if(difference>0){
                difference = difference;
            }else if(difference<0){
                difference = 0;
            }
        this.setState({
            total,
            difference
        });

        this.props.updateqty(id,qty)
    
    }

    //删除商品
    delete(id){
        // console.log(id)
       this.props.delcartgoods(id).then(response => {
               
               this.props.getcartgoods(JSON.parse(localStorage.getItem("data")).phone,'cart')}).then(response => {
               console.log(response)
               let total = this.state.total;
               let difference = this.state.difference;
               if(this.props.data[0]){
                   total = cartgoods.map(item => ((parseFloat(item.newPrice) * Number(item.qty))).toFixed(2)).reduce((prev,cur) => parseFloat(prev) + parseFloat(cur));
                   difference = 100- total;
                    if(difference>0){
                        difference = difference;
                    }else if(difference<0){
                        difference = 0;
                    }
               }else {
                   total = 0;
                   difference = 0;
               }
               
               this.setState({
                   total,
                   difference
               });
              
           }
       )
    }

    render(){
        let data ;
        // console.log(this.props.data.data)
        for(let attr in this.props.data){
            attr == 'data' ? data=this.props.data[attr] : null;
        }
        let cartgoods = [];
        if(Array.isArray(data)){
            data.forEach((item)=>{
                
                cartgoods.push(item)
            })
    
        }
        // console.log(cartgoods)
        return(
            <div className="cart_main">

                <div className="cart_cart">
                    <div className="cart_top">
                    <i className="iconfont icon-fanhui cart_back" onClick={this.runBack.bind(this)}></i>
                    购物车   
                    </div>
                    <div className="cart_tips">全场满100元包邮，还差<span className="cart_tips_price">{this.state.difference}</span>元包邮</div>
                    <div className="cart_list">
                        <div className="cart_empty" ref="empty">
                            <img  className="cart_img1" src={require('../../static/images/cart.png')}/>
                            {/*<i className="iconfont icon-gouwuche cart_car"></i>*/}
                            <p className="cart_emtxt">购物车空空的，快去逛逛吧！</p>
                            <Link to="/carlist">
                            <span className="cart_goshop">去逛逛</span>  
                            </Link>  
                        </div> 
                        <div className="cart_notEmpty" ref="notEmpty">
                            <div className="cart_listAll">
                            {
                                cartgoods[0] && cartgoods.map((item)=>{
                                        return  <div className="cart_listdetails" ref="goods">
                                                <Link to={{pathname:"buy?id="+item.id}}>
                                                <img className="cart_pic" src={require(`../../static/imgs/${item.img}`)}/>
                                                <div className="cart_text">
                                                    <p className="cart_goodsTitle">{item.goodsName}</p>
                                                    <span className="cart_line-all">单品直降</span>
                                                    <p className="cart_goodsPrice1">{item.newPrice}<span className="cart_goodsPrice2">{item.oldPrice}</span></p>
                                                </div>
                                                </Link>
                                                <div className="cart_del">
                                                    <img src={require(`../../static/images/cart-del.png`)} onClick={this.delete.bind(this,item.id)}/>
                                                </div>
                                                
                                                <div className="cart_num">
                                                   <span className="cart_numcut" onClick={this.cutNum.bind(this,item.id,item.qty)}>-</span>
                                                   <input type="text" className="cart_count" value={item.qty}/>
                                                   <span className="cart_numadd" onClick={this.addNum.bind(this,item.id,item.qty)}>+</span>
                                                </div>
                                            </div>
                                            
                                    })
                                }
                            </div>

                            <div className="cart_settlement">
                                <span className="cart_settlement_text">合计(不计运费):<span className="cart_totlePrice">{this.state.total}</span></span>
                                <Link to="/order"> 
                                <span className="cart_goCount">去结算</span>
                                </Link>
                            </div>
                        </div>
                        <div className="cart_guess">
                            <p className="cart_guesstitle">猜你喜欢</p>
                            <div className="cart_guessyourlike">
                                <ul>

                                 {
                                cartgoods.map((item)=>{
                                    return (
                                    <Link to={{pathname:"buy?id="+item.id}}>
                                    <li className="cart_guessgoods">
                                        <img className="cart_guesspic" src={require(`../../static/imgs/${item.img}`)}/>
                                        <p className="cart_guessgoodstitle">{item.goodsName}</p>
                                        <span className="cart_guessgoodsPrice">{item.newPrice}</span>
                                    </li>
                                    </Link>)
                                    })
                                }   
                                    <Link to="/buy?id=5893158929">
                                    <li className="cart_guessgoods">
                                        <img className="cart_guesspic" src={require(`../../static/imgs/banner-1497370192976.jpg`)}/>
                                        <p className="cart_guessgoodstitle">澳洲草饲西冷牛排150g（含黄油和酱料包）</p>
                                        <span className="cart_guessgoodsPrice">31.8</span>
                                    </li>
                                    </Link>
                                    <Link to="/buy?id=9781589653">
                                     <li className="cart_guessgoods">

                                        <img className="cart_guesspic" src={require(`../../static/imgs/banner-1497369309754.jpg`)}/>
                                        <p className="cart_guessgoodstitle">广东麒麟瓜1个3kg以上/个(GD)</p>
                                        <span className="cart_guessgoodsPrice">39.9</span>
                                    </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>    
                <Footer />
                <SpinnerComponent show={this.props.loading}/>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.cartReducer.cart.loading,
    data:state.cartReducer.cart.data || [],

})
export default connect(mapStateToProps, cartActions)(cartComponent)
