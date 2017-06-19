import React, {Component} from 'react'
import { Router, Route, hashHistory, Link} from 'react-router'
import {connect} from 'react-redux'
import '../../static/styles/common.scss'
import '../../static/styles/rem.scss'
import '../carlist/Carlist.scss'
import * as AccordionActions from './AccordionAction'
import SpinnerComponent from '../spinner/SpinnerComponent'

 class ListComponent extends React.Component {
  constructor(props){
        super(props)
         
    }
  listed(){
    
    this.props.listing()
    console.log(this.props)
    // this.props.login(this.refs.username.value, this.refs.password.value, this.refs.verificationCode.value).then(response => {

    //         if(response.body.status == true){
    //             hashHistory.push('/mygzx')
                
    //             var obj = JSON.stringify(response.body.message.data[0]);
    //             localStorage.setItem("data",obj)
    //             //console.log(JSON.parse(localStorage.getItem("data")))
    //         }else{
    //             alert(response.body.message)
    //             this.createCode()
                
    //         }
    //     })
  }
  render(){
    return(
      <div>
       <li className="c-list">
        
        <Link to={{pathname:"ddlist",query:{name:'进口水果'}}} onClick={this.listed.bind(this)}>
        <i className="iconfont icon-shuiguo ib"></i>
        <div className="b-name">
        <p className="L-name1">进口水果</p>    
        <p className="L-name2">奇异果</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        
        </li>

        <li className="c-list">
        <Link to={{pathname:"ddlist",query:{name:'国产水果'}}} onClick={this.listed.bind(this)}>
        <i className="iconfont icon-shuiguo1 ib"></i>
        <div className="b-name">
        <p className="L-name1">国产水果</p>    
        <p className="L-name2">苹果</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
       <Link to={{pathname:"ddlist",query:{name:'精选肉类'}}} onClick={this.listed.bind(this)}>
        <i className="iconfont icon-rou ib"></i>
        <div className="b-name">
        <p className="L-name1">精选肉类</p>    
        <p className="L-name2">牛肉/猪肉</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to={{pathname:"ddlist",query:{name:'禽类'}}} onClick={this.listed.bind(this)}>
        <i className="iconfont icon-egg ib"></i>
        <div className="b-name">
        <p className="L-name1">禽类</p>    
        <p className="L-name2">鸡蛋</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to={{pathname:"ddlist",query:{name:'海鲜'}}} onClick={this.listed.bind(this)}>
        <i className="iconfont icon-shengxian ib"></i>
        <div className="b-name">
        <p className="L-name1">海鲜</p>    
        <p className="L-name2">鱼类</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

         <li className="c-list">
        <Link to={{pathname:"ddlist",query:{name:'乳品'}}} onClick={this.listed.bind(this)}>
        <i className="iconfont icon-dangao ib"></i>
        <div className="b-name">
        <p className="L-name1">乳品</p>    
        <p className="L-name2">糕点</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to={{pathname:"ddlist",query:{name:'新鲜蔬菜'}}} onClick={this.listed.bind(this)}>
        <i className="iconfont icon-shucai ib"></i>
        <div className="b-name">
        <p className="L-name1">新鲜蔬菜</p>    
        <p className="L-name2">菠菜</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to={{pathname:"ddlist",query:{name:'方便速食'}}} onClick={this.listed.bind(this)}>
        <i className="iconfont icon-miantiao-szxdf ib"></i>
        <div className="b-name">
        <p className="L-name1">方便速食</p>    
        <p className="L-name2">方便面</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to={{pathname:"ddlist",query:{name:'粮油杂货'}}} onClick={this.listed.bind(this)}>
        <i className="iconfont icon-liangyou ib"></i>
        <div className="b-name">
        <p className="L-name1">粮油杂货</p>    
        <p className="L-name2">米</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to={{pathname:"ddlist",query:{name:'饮料酒水'}}} onClick={this.listed.bind(this)}>
        <i className="iconfont icon-yinliao-copy ib"></i>
        <div className="b-name">
        <p className="L-name1">饮料酒水</p>    
        <p className="L-name2">饮料/酒</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to={{pathname:"ddlist",query:{name:'礼品礼券'}}} onClick={this.listed.bind(this)}>
        <i className="iconfont icon-fuli ib"></i>
        <div className="b-name">
        <p className="L-name1">礼品礼券</p>    
        <p className="L-name2">礼品折扣卷</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    loading: state.listing.loading
})
export default connect(mapStateToProps, AccordionActions)(ListComponent)