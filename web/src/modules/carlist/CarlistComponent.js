import React, {Component} from 'react'
import { Router, Route, browserHistory, hashHistory, Link} from 'react-router'

import '../../static/styles/common.scss'
import './Carlist.scss'
import ListComponent from '../Accordion/Accordion'
import * as AccordionActions from '../Accordion/AccordionAction'
import Foot from '../footer/footerComponent'



export default class CarlistComponent extends React.Component {
 handleSubmit(event) {
    event.preventDefault()
    const compont = event.target.elements[0].value
    const path = `ddlist?name=${compont}`
    hashHistory.push(path)
     }

    render(){
        return(
            <div className="carlist">
                <div className="search">
                <div className="search-box">
                <a  onClick={this.Soso} className="iconfont icon-fangdajing a-soso"></a>
                <form action={this.handleSubmit} onSubmit={this.handleSubmit}>
                <input type="text" className="soso" placeholder="请输入商品名称" />
                <button type="submit" className="quxiao">搜索</button>
                </form>
                
                </div>
                </div>
                <div className="zb"></div>
                <div className="zhen-list">
                <ul className="car-ul">
                <ListComponent></ListComponent>
                </ul>
                <Foot />
                </div>

            </div>
        )
    }
}







