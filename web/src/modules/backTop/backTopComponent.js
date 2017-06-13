import React, {Component} from 'react'
import './backTop.scss'
import $ from 'jquery'
export default class BackTop extends Component{
    backTop(){
        $('body').animate({scrollTop:0},300);
    }
    render(){
        if(!this.props.fade){
            return null
        }
        // console.log(this.props.fade)        
        return (
            <div className="back_top" ref="backTop" onClick={this.backTop.bind(this)}>
                <i className="iconfont icon-huidaodingbu"></i>
            </div>
        )
    }
}