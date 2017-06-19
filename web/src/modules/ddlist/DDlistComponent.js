import {connect} from 'react-redux'
import React, {Component} from 'react'
import { Router, Route, hashHistory, Link} from 'react-router'
import LazyLoad from 'react-lazyload'
import '../../static/styles/common.scss'
import './DDlist.scss'
import * as AccordionActions from '../Accordion/AccordionAction'
import * as BackTopActions from '../backTop/backTopAction'
import * as DDlistActions from './DDlistAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import Foot from '../footer/footerComponent'
import BackTopComponent from '../backTop/backTopComponent'

import $ from 'jquery'
let compont=["默认","价格","销量"]
 class DDlistComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
         selected:0,
         nav:'fresh_nav',
            fresh:'fresh1',
            chuangkou:'fresh_window',
            navScroll:0,
            recommend:null,
            hot:null,
            meat:null,
            sea:null,
            beverage:null,
            sweet:null,
            phone:null   
        }
    }
    componentWillMount(){
        if(localStorage.getItem('data')){
            let userPhone = JSON.parse(localStorage.getItem('data')).phone;
            this.setState({
                phone:userPhone
            })
        }
    }
    componentDidMount(){
        this.props.listing(this.props.location.query.name,null,'dd')
    }
    
    onchange(index){
        return index==this.state.selected ? 'xx-l selected'  : 'xx-l'
    }
    change(index){
        this.setState({selected:index}) 
        var name = this.props.location.query.name;
        this.props.listing(name,index,'dd')
    }

    orderScroll(){
    this.props.index()
    }

    addItem(obj){

        obj.phone = this.state.phone
        // console.log(obj)
        !this.state.phone ? hashHistory.push('/login') : this.props.addItem(obj).then(response=>{
            // console.log(response)
            if(response.type == 'SUCCESS'){
                this.setState({
                    chuangkou:'fresh_window_fixed'
                })
                setTimeout(()=>{
                    this.setState({
                        chuangkou:'fresh_window'
                    })
                },1000)
            }
            
        })
    }

       
    render(){

        let data;
        for(let attr in this.props.data){
			attr == 'data' ? data=this.props.data[attr] : null;
		}
        // let shuju=[];
        // if(Array.isArray(data)){
        //     data.forEach((item)=>{
        //         shuju.push(item)
        //     })
        // }
        return(
            <div className="ddlist">
                <div className={this.state.chuangkou}>添加购物车成功</div>

                <BackTopComponent fade={this.props.backtop}/>
                <div className="lb-1">
                <ul className="lb-ul">
                {
                 compont.map(function(item,index){
                return <li className={this.onchange(index)} onTouchStart={this.change.bind(this,index)}><span className="l-p1">{item}<span  style={{fontSize: '12px'}} className="iconfont icon-iconfontunfold ifunck"></span></span></li>
                 }.bind(this))
                }
                
                </ul>
                </div>
                <div className="bal"></div>
                <div className="goods">
                   
                <ul className="sp-list">
                {
                    Array.isArray(data) && data.map((item)=>{
                       return <li className="sp-li">
                           <Link to={{pathname:"buy",query:{id:item.id}}}>
                            <div className="god-img" onClick={this.change.bind(this)}>
                        
                                <LazyLoad height={85} offset={-70}  >
                                <img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)} />   
                                </LazyLoad>
                                  
                            </div>
                            <span className="sp-name">{item.goodTitle}</span></Link>  
                            <span className="sp-price">
                            <span>{item.newPrice}</span><span>{item.oldPrice}</span><span>({item.size1})</span></span>      
                            <i className="iconfont icon-gouwuche carlist" onClick={this.addItem.bind(this,{id:`${item.id}`,img:`${JSON.parse(item.banner)[0]}`,goodsName:`${item.goodTitle}`,newPrice:`${item.newPrice}`,oldPrice:`${item.oldPrice}`,qty:'1'})}></i>
                            <p className="show-xx">销量 : {item.sale}</p>
                        </li>
                    }) 
            }
                
                </ul>
                
                <Foot />

                </div>
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    loading: state.listing.loading,
    data:state.listing.data,
    backtop: state.listing.backtop
})
export default connect(mapStateToProps, Object.assign({},BackTopActions,AccordionActions,DDlistActions))(DDlistComponent)
{/*<li className="xx-l selected" onClick={this.change.bind(this)}><span className="l-p1">默认<span style={{fontSize: '12px'}} className="iconfont icon-iconfontunfold ifunck"></span></span></li>
                    <li className="xx-l" onClick={this.change.bind(this)}><span className="l-p1">价格<span  style={{fontSize: '12px'}} className="iconfont icon-iconfontunfold ifunck"></span></span></li>
                <li className="xx-l" onClick={this.change.bind(this)}><span className="l-p1">销量<span style={{fontSize: '12px'}} className="iconfont icon-iconfontunfold ifunck"></span></span></li>*/}
                

// let arr=["shangwu","zhongwu","wanshang"]
// let arrLevel=[98,198,998,1998]
// let arrNums=[1,2,3,4,5,6,7,8,9]

// class BuyComponent extends Component {
//     constructor(props){
//         super(props)
//         this.state={ 
//             num:0,
//             sessionIndex:0,
//             levelIndex:0,
//             ticketNums:1,
//             perPrice:arrLevel[0],
//             totalPrice:arrLevel[0]
         
//         }
//     }
//     showPop(){
//         this.refs.pop.style.visibility=" visible"
//     }
//     closePop(){
//         this.refs.pop.style.visibility=" hidden"
//     }
//     onchangesession(index){
//         return index==this.state.sessionIndex ? 'selectSession' : ''
//     }
//     changesession(index){
//         this.setState({sessionIndex:index}) 
//     }
//     onchangelevel(index){
//         return index==this.state.levelIndex ? 'selectLevel' : ''
//     }
//     changelevel(index){
//         this.setState({levelIndex:index,perPrice:arrLevel[index]})
//     }
//     changeNum(index){
//         this.setState({num:index,ticketNums:index+1})
//     }
//     onchangeNum(index){
//         return index==this.state.num ? 'selectNum' : ''
//     }
// <ul className="session">    
//                             {
                              
//                             } 
//                         </ul>
