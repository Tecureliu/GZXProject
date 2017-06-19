import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import LazyLoad from 'react-lazyload'

import * as BackTopActions from '../backTop/backTopAction.js'
import * as cityActions from './cityComponent/cityAction'
import * as loginActions from '../login/LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './Index.scss'
import BackTopComponent from '../backTop/backTopComponent'
import FooterComponent from '../footer/footerComponent'

import Banner from './banner/banner'
import Text from './text/text'

const navs = [['qiandao.png','会员签到','/qiandao'],['fuli.png','会员福利','/member'],['jinpin.png','精品原箱','/ddlist'],['youhui.png','优惠劵','/coupon'],['xian.png','新品尝鲜','/track'],['remai.png','热卖排行','/remai'],['yinhang.png','银行活动','/bank'],['qiyefuli.png','企业福利','/company']];

const goods = ['goods1.jpg','goods2.jpg','goods3.jpg','goods4.jpg','goods5.jpg','goods6.jpg'];
const IMG = [{
	photo:require('../../static/images/banner.jpg'),
	alt:'image1'
},{
	photo:require('../../static/images/banner2.jpg'),
	alt:'image2'
},{
	photo:require('../../static/images/banner3.jpg'),
	alt:'image3'
},{
	photo:require('../../static/images/banner4.jpg'),
	alt:'image4'
}];
const GOODS_NEWS = [{
	news:'【建行龙支付】 全场满减 最高五折',
	route:'/ccb'
},{
	news:'【特惠价79元】美心曲奇饼干礼盒装',
	route:'/buy?id=9504367769'
},{
	news:'【经典推荐】红玫瑰苹果12个69.8元',
	route:'/buy?id=9997142933'
},{
	news:'【特惠价69元】优形鸡胸肉七日装',
	route:'/buy?id=8495764767'
}];
class IndexComponent extends Component{
// {this.props.index()}
	constructor(props){
        super(props)
    }
    componentWillMount(){
    	this.props.hotsale()
    	// console.log(this.props)

    }
    componentDidMount(){
    	window.addEventListener('scroll',this.orderScroll.bind(this))
    	// console.log(1111)

    }
    orderScroll(){
    	// console.log(111)
    	
    	this.props.index()
    }
    render(){
    	// console.log(this.props.data)
    	// console.log(this.props.lastFetched)
    	// !this.props.lastFetched ? return : true;
    	// if(!this.props.lastFetched){
    	// 	return (
    	// 		<div>null</div>
    	// 	)
    	// }
    	// console.log(this.props.lastFetched)
    	let data;
		for(let attr in this.props.data){
			attr == 'data' ? data=this.props.data[attr] : data=[];
		}
		// console.log(Array.isArray(data))
		let fruit = [];
		let meat = [];
		let seafood = [];
		let egg = [];
		let drink = [];
		let greens = [];
		let cake = [];
		let soup = [];
		let fastfood = [];
		let gift = [];
		if(Array.isArray(data)){
			data.forEach((item)=>{
				if(item.bigKind == '进口水果' || item.bigKind == '国产水果'){
					fruit.push(item)
				}
				if(item.bigKind == '精选肉类'){
					meat.push(item)
				}
				if(item.bigKind == '海鲜水产'){
					seafood.push(item)
				}
				if(item.bigKind == '禽类蛋品'){
					egg.push(item);
				}
				if(item.bigKind == '新鲜蔬菜'){
					greens.push(item);
				}
				if(item.bigKind == '粮油杂货'){
					soup.push(item);
				}
				if(item.bigKind == '饮料酒水'){
					drink.push(item);
				}
				if(item.bigKind == '乳品糕点'){
					cake.push(item);
				}
				if(item.bigKind == '方便速食'){
					fastfood.push(item);
				}
				if(item.bigKind == '礼品礼券'){
					gift.push(item);
				}
			})
		}
		// console.log(fruit)
        return (

            <div className="container">
            	<BackTopComponent fade={this.props.backtop}/>
            	<SpinnerComponent show={this.props.loading}/>
           		<header>
           			<div className="head_left">
           				<Link to="/city"><span className="city">{this.props.cityName}</span>
           				<i className="iconfont icon-iconfontunfold"></i></Link>
           			</div>
           			<Link to="/carlist">
           			<div className="head_right">
						<div className="head_search">
							<a href="javascript:;" className="iconfont icon-fangdajing"></a>
						</div>
           			</div>
           			</Link>
           		</header>
           		<main>
					<div className="banner">
						
						{
							<Banner imgList={IMG} duration="3000"/>
						}
					</div>
					<div className="ad">
						<img src={require('../../static/images/ad.png')}/>
					</div>
					<div className="nav">
						<ul>
							{
								navs.map((item)=>{
									return <li>
											<Link to={item[2]}>
											<i><img src={require(`../../static/images/${item[0]}`)}/></i>
											<p>{item[1]}</p>
											</Link>
										</li>
								})
							}
							
						</ul>
					</div>
					<div className="news">
						<i><h4>果真鲜<span className="news_fast">快报</span></h4></i>
						<div className="news_detail">
							
							<Text newsList={GOODS_NEWS} delay="3000"/>
							
							
						</div>
					</div>
					<div className="tu1"><img src={require('../../static/images/tu1.jpg')}/></div>
					<div className="tu1_list clear">
						<ul className="tu1_ul">
							{
								fastfood.map((item)=>{
									return <li className="tu1_li">
											<Link to={`/buy?id=${item.id}`}>
											<div className="pic">
												<a href="javascript:;">
													<img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/>
												</a>
											</div></Link>
											<div className="info">
												<p className="name">
													<a href="javascript:;">{item.goodTitle}</a>
												</p>
												<div className="price">
													<strong>¥{item.newPrice}</strong>{item.size1}
												</div>
											</div> 
										</li>
								})
							}
							
						</ul>
					</div>
					<div className="tu1"><img src={require('../../static/images/tu2.jpg')}/></div>
					
					<div className="tu1_list">
						<ul className="tu1_ul">
							{
								fruit.map((item)=>{
									return <li className="tu1_li">
											<div className="tag">新品</div>
											<Link to={`/buy?id=${item.id}`}>
											<div className="pic">
												<a href="javascript:;">
													<img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/>
												</a>
											</div></Link>
											<div className="info">
												<p className="name">
													<a href="javascript:;">{item.goodTitle}</a>
												</p>
												<div className="price">
													<strong>¥{item.newPrice}</strong>{item.size1}
												</div>
											</div> 
										</li>
								})
							}
						</ul>
					</div>
					<div className="tu1"><img src={require('../../static/images/tu3.jpg')}/></div>
					<div className="tu1_list">
						<ul className="tu1_ul">
							{
								seafood.map((item)=>{
									return <li className="tu1_li">
											<Link to={`/buy?id=${item.id}`}>
											<div className="pic">
												<a href="javascript:;">
													<img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/>
												</a>
											</div></Link>
											<div className="info">
												<p className="name">
													<a href="javascript:;">{item.goodTitle}</a>
												</p>
												<div className="price">
													<strong>¥{item.newPrice}</strong>{item.size1}
												</div>
											</div> 
										</li>
								})
							}
							
						</ul>
					</div>
					<div className="tu1"><img src={require('../../static/images/tu4.jpg')}/></div>
					<div className="tu1_list">
						<ul className="tu1_ul">
							{
								meat.map((item)=>{
									return <li className="tu1_li">
											<Link to={`/buy?id=${item.id}`}>
											<div className="pic">
												<a href="javascript:;">
													<img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/>
												</a>
											</div></Link>
											<div className="info">
												<p className="name">
													<a href="javascript:;">{item.goodTitle}</a>
												</p>
												<div className="price">
													<strong>¥{item.newPrice}</strong>{item.size1}
												</div>
											</div> 
										</li>
								})
							}
						</ul>
					</div>
					<div className="tu1"><img src={require('../../static/images/tu5.jpg')}/></div>
					<div className="tu1_list">
						<ul className="tu1_ul">
							{
								cake.map((item)=>{
									return <li className="tu1_li">
											<Link to={`/buy?id=${item.id}`}>
											<div className="pic">
												<a href="javascript:;">
													<img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/>
												</a>
											</div></Link>
											<div className="info">
												<p className="name">
													<a href="javascript:;">{item.goodTitle}</a>
												</p>
												<div className="price">
													<strong>¥{item.newPrice}</strong>{item.size1}
												</div>
											</div> 
										</li>
								})
							}
							
						</ul>
					</div>
					<div className="tu1"><img src={require('../../static/images/tu6.jpg')}/></div>
					<div className="tu1_list">
						<ul className="tu1_ul">
							{
								greens.map((item)=>{
									return <li className="tu1_li">
											<Link to={`/buy?id=${item.id}`}>
											<div className="pic">
												<a href="javascript:;">
													<img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/>
												</a>
											</div></Link>
											<div className="info">
												<p className="name">
													<a href="javascript:;">{item.goodTitle}</a>
												</p>
												<div className="price">
													<strong>¥{item.newPrice}</strong>{item.size1}
												</div>
											</div> 
										</li>
								})
							}
						</ul>
					</div>
					<div className="tu1"><img src={require('../../static/images/tu7.jpg')}/></div>
					<div className="tu1_list">
						<ul className="tu1_ul">
							{
								egg.map((item)=>{
									return <li className="tu1_li">
											<Link to={`/buy?id=${item.id}`}>
											<div className="pic">
												<a href="javascript:;">
													<img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/>
												</a>
											</div></Link>
											<div className="info">
												<p className="name">
													<a href="javascript:;">{item.goodTitle}</a>
												</p>
												<div className="price">
													<strong>¥{item.newPrice}</strong>{item.size1}
												</div>
											</div> 
										</li>
								})
							}
						</ul>
					</div>
					<div className="top_tu"><img src={require('../../static/images/top.jpg')}/></div>
					<div></div>
					<div className="list">
						<ul>
							{
								gift.map((item)=>{
									return <li>

											<div className="pic"><img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></div>
											<div className="intr">
												<Link to={`/buy?id=${item.id}`}>
												<p>{item.bigKind} {item.smallKind}</p>
												<p className="state">{item.goodTitle}</p></Link>
												<p className="price_norms"><strong>￥{item.newPrice}</strong><span>{item.size1}</span></p>
											</div>
										</li>
								})
							}
							
						</ul>
					</div>
					<div className="prolist" >
						<div className="blockwrap">
							<div className="title">
								<h3>
									<div className="point1"></div>
									新鲜水果
									<div className="point2"></div>
								</h3>
							</div>
							<ul>
							{
								fruit.map((item)=>{
									return <li>
											<Link to={`/buy?id=${item.id}`}>
											<p><img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
											<p className="fruit_name">{item.goodTitle}</p></Link>
											<p><strong>￥{item.newPrice}</strong><span> {item.size1}</span></p>

										</li>
								})
							}
								
							</ul>
						</div>
					</div>
					<div className="prolist" >
						<div className="blockwrap">
							<div className="title">
								<h3>
									<div className="point1"></div>
									水产海鲜
									<div className="point2"></div>
								</h3>
							</div>
							<ul>
								{
									seafood.map((item)=>{
										return <li>
												<Link to={`/buy?id=${item.id}`}>
												<p><img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
												<p className="fruit_name">{item.goodTitle}</p></Link>
												<p><strong>￥{item.newPrice}</strong><span> {item.size1}</span></p>

											</li>
									})
								}
								
							</ul>
						</div>
					</div>
					<div className="prolist" >
						<div className="blockwrap">
							<div className="title">
								<h3>
									<div className="point1"></div>
									精选肉类
									<div className="point2"></div>
								</h3>
							</div>
							<ul>
							{
								meat.map((item)=>{
									return <li>
											<Link to={`/buy?id=${item.id}`}>
											<p><img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
											<p className="fruit_name">{item.goodTitle}</p></Link>
											<p><strong>￥{item.newPrice}</strong><span> {item.size1}</span></p>

										</li>
								})
							}
								
							</ul>
						</div>
					</div>
					<div className="prolist" >
						<div className="blockwrap">
							<div className="title">
								<h3>
									<div className="point1"></div>
									禽类蛋品
									<div className="point2"></div>
								</h3>
							</div>
							<ul>
							{
								egg.map((item)=>{
									return <li>
											<Link to={`/buy?id=${item.id}`}>
											<p><img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
											<p className="fruit_name">{item.goodTitle}</p></Link>
											<p><strong>￥{item.newPrice}</strong><span> {item.size1}</span></p>

										</li>
								})
							}
								
							</ul>
						</div>
					</div>
					<div className="prolist" >
						<div className="blockwrap">
							<div className="title">
								<h3>
									<div className="point1"></div>
									食品饮料
									<div className="point2"></div>
								</h3>
							</div>
							<ul>
							{
								drink.map((item)=>{
									return <li>
											<Link to={`/buy?id=${item.id}`}>
											<p><img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
											<p className="fruit_name">{item.goodTitle}</p></Link>
											<p><strong>￥{item.newPrice}</strong><span> {item.size1}</span></p>

										</li>
								})
							}
								
							</ul>
						</div>
					</div>
					<div className="prolist" >
						<div className="blockwrap">
							<div className="title">
								<h3>
									<div className="point1"></div>
									安心蔬菜
									<div className="point2"></div>
								</h3>
							</div>
							<ul>
							{
								greens.map((item)=>{
									return <li>
											<Link to={`/buy?id=${item.id}`}>
											<p><img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
											<p className="fruit_name">{item.goodTitle}</p></Link>
											<p><strong>￥{item.newPrice}</strong><span> {item.size1}</span></p>

										</li>
								})
							}
								
							</ul>
						</div>
					</div>
					<div className="prolist" >
						<div className="blockwrap">
							<div className="title">
								<h3>
									<div className="point1"></div>
									养生汤品
									<div className="point2"></div>
								</h3>
							</div>
							<ul>
							{
								soup.map((item)=>{
									return <li>
											<Link to={`/buy?id=${item.id}`}>
											<p><img src={require(`../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
											<p className="fruit_name">{item.goodTitle}</p></Link>
											<p><strong>￥{item.newPrice}</strong><span> {item.size1}</span></p>

										</li>
								})
							}
								
							</ul>
						</div>
					</div>
					
           		</main>
           		<FooterComponent />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    backtop: state.backTop.backtop,
    cityName:state.city.cityName,
    loading:state.login.loading,
    data:state.login.data,
    lastFetched:state.login.lastFetched

})
export default connect(mapStateToProps, Object.assign({},BackTopActions,cityActions,loginActions))(IndexComponent)
// console.log(mapStateToProps)
// export default IndexComponent
