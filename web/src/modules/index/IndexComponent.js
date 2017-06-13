import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
// import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile'
import * as IndexActions from './IndexAction'
import './Index.scss'
import BackTopComponent from '../backTop/backTopComponent'
import FooterComponent from '../footer/footerComponent'
// import Slider from '../swipper/Slider/Slider'
import Banner from '../swipper/banner'
import Text from './text/text'

const navs = [['qiandao.png','会员签到','/qiandao'],['fuli.png','会员福利','fuli'],['jinpin.png','精品原箱','/jinpin'],['youhui.png','优惠劵','/youhui'],['xian.png','新品尝鲜','/xian'],['remai.png','热卖排行','/remai'],['yinhang.png','银行活动','yihang'],['qiyefuli.png','企业福利','qiyefuli']];

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
	route:'/cookie'
},{
	news:'【经典推荐】红玫瑰苹果12个69.8元',
	route:'/apple'
},{
	news:'【特惠价69元】优形鸡胸肉七日装',
	route:'/chicken'
}];
const GOODS_KINDS = ['新鲜水果','水产海鲜','精选肉类','禽类蛋品','食品饮料','安心蔬菜','养生汤品']
class IndexComponent extends Component{
// {this.props.index()}
	constructor(props){
        super(props)
    }
    componentDidMount(){
    	window.addEventListener('scroll',this.orderScroll.bind(this))
    }
    orderScroll(){
    	// console.log(111)
    	this.props.index()
    }
    render(){
    	// console.log(this.props)
        return (

            <div className="container">
            	<BackTopComponent fade={this.props.backtop}/>
           		<header>
           			<div className="head_left">
           				<span className="city">广州</span>
           				<i className="iconfont icon-iconfontunfold"></i>
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
						// <Slider
						//     items={IMG}
						//     speed={1.2}
						//     delay={2.1}
						//     pause={true}
						//     autoplay={true}
						//     dots={true}
						//     arrows={true}
						//   />
					}
						
						{
						<Banner imgList={IMG} duration="3000"/>
						}
					</div>
					<div className="ad">
						<img src="http://localhost:3002/src/static/images/ad.png"/>
					</div>
					<div className="nav">
						<ul>
							{
								navs.map((item)=>{
									return <li>
											<Link to={item[2]}>
											<i><img src={`http://localhost:3002/src/static/images/${item[0]}`}/></i>
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
					<div className="tu1"><img src="http://localhost:3002/src/static/images/tu1.jpg"/></div>
					<div className="tu1_list">
						<ul>
							{
								goods.map((item)=>{
									return <li>
											<p><img src={`http://localhost:3002/src/static/images/${item}`}/></p>
											<p className="name">新奇士美国夏橙</p>
											<p><span className="price">￥56 </span><span className="norms">/12个</span></p>
										</li>
								})
							}
							<li>
								<p className="more">查看更多<span>&gt;</span></p>
							</li>
						</ul>
						<div className="tag">新品</div>
					</div>
					<div className="tu1"><img src="http://localhost:3002/src/static/images/tu2.jpg"/></div>
					<div className="tu1_list">
						<ul>
							{
								goods.map((item)=>{
									return <li>
											<p><img src={`http://localhost:3002/src/static/images/${item}`}/></p>
											<p className="name">新奇士美国夏橙</p>
											<p><span className="price">￥56 </span><span className="norms">/12个</span></p>
										</li>
								})
							}
							<li>
								<p className="more">查看更多<span>&gt;</span></p>
							</li>
						</ul>
					</div>
					<div className="tu1"><img src="http://localhost:3002/src/static/images/tu3.jpg"/></div>
					<div className="tu1_list">
						<ul>
							{
								goods.map((item)=>{
									return <li>
											<p><img src={`http://localhost:3002/src/static/images/${item}`}/></p>
											<p className="name">新奇士美国夏橙</p>
											<p><span className="price">￥56 </span><span className="norms">/12个</span></p>
										</li>
								})
							}
							<li>
								<p className="more">查看更多<span>&gt;</span></p>
							</li>
						</ul>
					</div>
					<div className="tu1"><img src="http://localhost:3002/src/static/images/tu4.jpg"/></div>
					<div className="tu1_list">
						<ul>
							{
								goods.map((item)=>{
									return <li>
											<p><img src={`http://localhost:3002/src/static/images/${item}`}/></p>
											<p className="name">新奇士美国夏橙</p>
											<p><span className="price">￥56 </span><span className="norms">/12个</span></p>
										</li>
								})
							}
							<li>
								<p className="more">查看更多<span>&gt;</span></p>
							</li>
						</ul>
					</div>
					<div className="tu1"><img src="http://localhost:3002/src/static/images/tu5.jpg"/></div>
					<div className="tu1_list">
						<ul>
							{
								goods.map((item)=>{
									return <li>
											<p><img src={`http://localhost:3002/src/static/images/${item}`}/></p>
											<p className="name">新奇士美国夏橙</p>
											<p><span className="price">￥56 </span><span className="norms">/12个</span></p>
										</li>
								})
							}
							<li>
								<p className="more">查看更多<span>&gt;</span></p>
							</li>
						</ul>
					</div>
					<div className="tu1"><img src="http://localhost:3002/src/static/images/tu6.jpg"/></div>
					<div className="tu1_list">
						<ul>
							{
								goods.map((item)=>{
									return <li>
											<p><img src={`http://localhost:3002/src/static/images/${item}`}/></p>
											<p className="name">新奇士美国夏橙</p>
											<p><span className="price">￥56 </span><span className="norms">/12个</span></p>
										</li>
								})
							}
							<li>
								<p className="more">查看更多<span>&gt;</span></p>
							</li>
						</ul>
					</div>
					<div className="tu1"><img src="http://localhost:3002/src/static/images/tu7.jpg"/></div>
					<div className="tu1_list">
						<ul>
							{
								goods.map((item)=>{
									return <li>
											<p><img src={`http://localhost:3002/src/static/images/${item}`}/></p>
											<p className="name">新奇士美国夏橙</p>
											<p><span className="price">￥56 </span><span className="norms">/12个</span></p>
										</li>
								})
							}
							<li>
								<p className="more">查看更多<span>&gt;</span></p>
							</li>
						</ul>
					</div>
					<div className="top_tu"><img src="http://localhost:3002/src/static/images/top.jpg"/></div>
					<div></div>
					<div className="list">
						<ul>
							<li>
								<div className="pic"><img src="http://localhost:3002/src/static/images/list1.jpg"/></div>
								<div className="intr">
									<p >Zespri佳沛金果</p>
									<p className="state">该商品不与U币、其他优惠券、现金券及抵用卡同享</p>
									<p className="price_norms"><strong>￥123</strong><span>/3.3g</span></p>
								</div>
								<div className="list_tag">新品</div>
							</li>
							<li>
								<div className="pic"><img src="http://localhost:3002/src/static/images/list1.jpg"/></div>
								<div className="intr">
									<p >Zespri佳沛金果</p>
									<p className="state">该商品不与U币、其他优惠券、现金券及抵用卡同享</p>
									<p className="price_norms"><strong>￥123</strong><span>/3.3g</span></p>
								</div>
								<div className="list_tag">新品</div>
							</li>
							<li>
								<div className="pic"><img src="http://localhost:3002/src/static/images/list1.jpg"/></div>
								<div className="intr">
									<p >Zespri佳沛金果</p>
									<p className="state">该商品不与U币、其他优惠券、现金券及抵用卡同享</p>
									<p className="price_norms"><strong>￥123</strong><span>/3.3g</span></p>
								</div>
								<div className="list_tag">新品</div>
							</li>
							<li>
								<div className="pic"><img src="http://localhost:3002/src/static/images/list1.jpg"/></div>
								<div className="intr">
									<p >Zespri佳沛金果</p>
									<p className="state">该商品不与U币、其他优惠券、现金券及抵用卡同享</p>
									<p className="price_norms"><strong>￥123</strong><span>/3.3g</span></p>
								</div>
								<div className="list_tag">新品</div>
							</li>
						</ul>
					</div>
					{
						GOODS_KINDS.map((item)=>{
							return <div className="prolist" >
									<div className="blockwrap">
										<div className="title">
											<h3>
												<div className="point1"></div>
												{item}
												<div className="point2"></div>
											</h3>
										</div>
										<ul>
											<li>
												<p><img src={require('../../static/images/goods2.jpg')}/></p>
												<p className="fruit_name">海南妃子笑荔枝</p>
												<p><strong>￥123</strong><span> /2.5kg</span></p>
											</li>
											<li>
												<p><img src={require('../../static/images/goods2.jpg')}/></p>
												<p className="fruit_name">海南妃子笑荔枝</p>
												<p><strong>￥123</strong><span> /2.5kg</span></p>
											</li>
											<li>
												<p><img src={require('../../static/images/goods2.jpg')}/></p>
												<p className="fruit_name">海南妃子笑荔枝</p>
												<p><strong>￥123</strong><span> /2.5kg</span></p>
											</li>
										</ul>
									</div>
								</div>
						})
					}
					
           		</main>
           		<FooterComponent />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    backtop: state.index.backtop
})

export default connect(mapStateToProps, IndexActions)(IndexComponent)
// console.log(mapStateToProps)
// export default IndexComponent
