import React, {Component} from 'react'
import { Router, Route, hashHistory, Link} from 'react-router'
import '../../static/styles/common.scss'
import './Carlist.scss'
import ListComponent from '../Accordion/Accordion'
import * as AccordionActions from '../Accordion/AccordionAction'
import FooterComponent from '../footer/footerComponent'



export default class CarlistComponent extends React.Component {


    render(){
        return(
            <div className="carlist">
                <div className="search">
                <div className="search-box">
                <a  onClick={this.Soso} className="iconfont icon-fangdajing a-soso"></a>
                <form>
                <input type="text" className="soso" placeholder="请输入商品名称" /></form>
                <span className="quxiao">取消</span>
                </div>
                </div>
                <div className="zhen-list">
                <ul className="car-ul">
                <ListComponent></ListComponent>
                </ul>
                </div>
               <FooterComponent/>
            </div>
        )
    }
}







