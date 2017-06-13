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
    this.props.listing('刘云是sb');
    console.log(this.props)
  }
  render(){
    return(
      <div>
       <li className="c-list">
        
        <Link to="/ddlist" onClick={this.listed.bind(this)}>
        <i className="iconfont icon-shuiguo ib"></i>
        <div className="b-name">
        <p className="L-name1">进口水果</p>    
        <p className="L-name2">奇异果</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        
        </li>

        <li className="c-list">
        <Link to="/ddlist">
        <i className="iconfont icon-shuiguo1 ib"></i>
        <div className="b-name">
        <p className="L-name1">国产水果</p>    
        <p className="L-name2">苹果</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to="/ddlist">
        <i className="iconfont icon-rou ib"></i>
        <div className="b-name">
        <p className="L-name1">精选肉类</p>    
        <p className="L-name2">牛肉/猪肉</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to="/ddlist">
        <i className="iconfont icon-egg ib"></i>
        <div className="b-name">
        <p className="L-name1">禽类</p>    
        <p className="L-name2">鸡蛋</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to="/ddlist">
        <i className="iconfont icon-shengxian ib"></i>
        <div className="b-name">
        <p className="L-name1">海鲜</p>    
        <p className="L-name2">鱼类</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

         <li className="c-list">
        <Link to="/ddlist">
        <i className="iconfont icon-dangao ib"></i>
        <div className="b-name">
        <p className="L-name1">乳品</p>    
        <p className="L-name2">糕点</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to="/ddlist">
        <i className="iconfont icon-shucai ib"></i>
        <div className="b-name">
        <p className="L-name1">生鲜蔬菜</p>    
        <p className="L-name2">菠菜</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to="/ddlist">
        <i className="iconfont icon-miantiao-szxdf ib"></i>
        <div className="b-name">
        <p className="L-name1">方便素食</p>    
        <p className="L-name2">方便面</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to="/ddlist">
        <i className="iconfont icon-liangyou ib"></i>
        <div className="b-name">
        <p className="L-name1">粮油杂食</p>    
        <p className="L-name2">米</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to="/ddlist">
        <i className="iconfont icon-yinliao-copy ib"></i>
        <div className="b-name">
        <p className="L-name1">饮料酒水</p>    
        <p className="L-name2">饮料/酒</p>
        </div>
        <span className="iconfont icon-fanhui jinru"></span>
        </Link>
        </li>

        <li className="c-list">
        <Link to="/ddlist">
        <i className="iconfont icon-fuli ib"></i>
        <div className="b-name">
        <p className="L-name1">礼品劵</p>    
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
    loading: state.login.loading
})
export default connect(mapStateToProps, AccordionActions)(ListComponent)