import React,{Component} from 'react'
import './backTrack.scss'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import BackTopComponent from '../../backTop/backTopComponent'
import * as backTopActions from '../../backTop/backTopAction.js'
import * as loginActions from '../../login/LoginAction'
import * as hotSaleActions from '../remaiComponent/hotSaleAction'

class BackTrackComponent extends Component{
	constructor(props){
		super(props)
		this.state = {
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
		// console.log(this.props)
		this.props.hotsale()
		if(localStorage.getItem('data')){
    		let userPhone = JSON.parse(localStorage.getItem('data')).phone;
    		this.setState({
    			phone:userPhone
    		})
    	}
	}
	componentWillUnmount(){
		this.refs.ul.removeEventListener('scroll',this.levelScroll.bind(this))
	}
	componentDidMount(){
		window.addEventListener('scroll',this.dealDOM.bind(this))
		//监听局部滚动事件
		this.refs.ul.addEventListener('scroll',this.levelScroll.bind(this))
		
	}
	dealDOM(){
		this.levelScroll()
		this.props.index()
		let scrollHeight = document.body.scrollTop
		// console.log(document.body.scrollLeft)

		if(scrollHeight < 210){
			this.setState({
				nav:'fresh_nav',
				fresh:'fresh1'
			})
		}
		if(scrollHeight == 200){
			document.body.scrollTop = 230;
		}
		if(scrollHeight >= 210 && scrollHeight <= 800){
			this.setstate('recommend')
		}
		if(scrollHeight > 800 && scrollHeight <=1630){
			this.setstate('hot')
			this.setState({
				navScroll:0
			})
		}
		if(scrollHeight > 1630 && scrollHeight <=2450){
			this.setstate('meat')
			this.setState({
				navScroll:110
			})
		}
		if(scrollHeight > 2450 && scrollHeight <=3283){
			this.setstate('sea')
			this.setState({
				navScroll:210
			})
		}
		if(scrollHeight > 3283 && scrollHeight <=4300){
			this.setstate('beverage')
			this.setState({
				navScroll:316
			})
		}
		if(scrollHeight > 4300){
			this.setstate('sweet')
			this.setState({
				navScroll:316
			})
		}
	}
	levelScroll(){
		// console.log(this.refs.ul)
		if(this.refs.ul){
			this.refs.ul.scrollLeft = this.state.navScroll
		}
		
		
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
	common(classname,scrolltop){
		this.setstate(classname);
		
		this.scrollTimer = setInterval(()=>{
			let currentTop = document.body.scrollTop
			let speed = (currentTop - Number(scrolltop))/10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
			// console.log(currentTop,scrolltop)
			if(currentTop == Number(scrolltop)){
				clearInterval(this.scrollTimer)
				currentTop = Number(scrolltop) + speed
			}
			document.body.scrollTop = currentTop - speed
		},30)
		
	}
	setstate(classname){
		this.setState({
			nav:'fresh_nav_fixed',
			fresh:'fresh1_top',
			beverage:classname == 'beverage' ? 'beverage' : null,
			hot:classname == 'hot' ? 'hot' : null,
			meat:classname == 'meat' ? 'meat' : null,
			sea:classname == 'sea' ? 'sea' : null,
			recommend:classname == 'recommend' ? 'recommend' : null,
			sweet:classname == 'sweet' ? 'sweet' : null
		})
	}
	render(){
		
		// console.log(this.props.data)
		let data;
		for(let attr in this.props.data){
			attr == 'data' ? data=this.props.data[attr] : data=[];
		}
		// console.log(Array.isArray(data))
		let fruit = [];
		let hotsale = [];
		let seafood = [];
		let egg = [];
		let drink = [];
		if(Array.isArray(data)){
			data.forEach((item)=>{
				if(item.bigKind == '国产水果' || item.bigKind == '进口水果'){
					fruit.push(item)
				}
				if(item.bigKind == '海鲜水产' || item.bigKind == '新鲜蔬菜'){
					seafood.push(item)
				}
				if(item.bigKind == '禽类蛋品' || item.bigKind == '精选肉类'){
					egg.push(item);
				}
				if(item.bigKind == '饮料酒水' || item.bigKind == '方便速食'){
					drink.push(item);
				}
			})
		}

		if(fruit[0]){
			hotsale.push(fruit.slice(5,7)[0],fruit.slice(5,7)[1])
			hotsale.push(seafood.slice(3,5)[0],seafood.slice(3,5)[1])
			hotsale.push(egg.slice(4,6)[0],egg.slice(4,6)[1])
			hotsale.push(drink.slice(1,3)[0],drink.slice(1,3)[1])
		}
		// console.log(this.props)
		return (

			<div className="fresh_container">
				<BackTopComponent fade={this.props.backtop}/>
				<div className={this.state.chuangkou}>添加购物车成功</div>
				<div className="fresh_img">
					<img src={require('../../../static/images/fresh.jpg')}/>
				</div>
				<div className={this.state.nav} ref="ul">
					<ul className="fresh_navul">
						<li className={this.state.recommend} onClick={this.common.bind(this,'recommend',230)}><a href="javascript:;">新品推荐</a><i></i></li>
						<li className={this.state.hot} onClick={this.common.bind(this,'hot',801)}><a href="javascript:;">新品热销</a><i></i></li>
						<li className={this.state.meat} onClick={this.common.bind(this,'meat',1631)}><a href="javascript:;">禽蛋肉类</a><i></i></li>
						<li className={this.state.sea} onClick={this.common.bind(this,'sea',2458)}><a href="javascript:;">海鲜水产</a><i></i></li>
						<li className={this.state.beverage} onClick={this.common.bind(this,'beverage',3284)}><a href="javascript:;">食品饮料</a><i></i></li>
						<li className={this.state.sweet} onClick={this.common.bind(this,'beverage',4301)}><a href="javascript:;">甜蜜鲜果</a><i></i></li>
					</ul>
				</div>
				<div className={this.state.fresh}>
					<Link to="/buy?id=1837469342"><img src={require('../../../static/images/fresh1.jpg')}/></Link>
				</div>
				<div className="fresh2">
					<Link to="/buy?id=5893158929"><img src={require('../../../static/images/fresh2.jpg')}/></Link>
				</div>
				
				<div className="fresh_goods_detail">
					<div className="fresh_goods_kindsimg">
						<img src={require('../../../static/images/hotsale.jpg')}/>
					</div>
					<div className="fresh_goodslist">
						<ul>
							{
								hotsale[0] && hotsale.map((item)=>{
									return <li className="fresh_goodslist_li">
											<Link to={`/buy?id=${item.id}`}>
											<p className="fresh_goodsimg"><img src={require(`../../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
											<p className="fresh_goodsname">{item.goodTitle}</p></Link>
											<p className="fresh_goodsprice"><strong>￥{item.newPrice}</strong><span>.00</span>
												<del>￥{item.oldPrice}.00</del>
												<span className="iconfont icon-gouwuche" onClick={this.addItem.bind(this,{id:`${item.id}`,img:`${JSON.parse(item.banner)[0]}`,goodsName:`${item.goodTitle}`,newPrice:`${item.newPrice}`,oldPrice:`${item.oldPrice}`,qty:'1'})}></span>
											</p>
										</li>
								})
							}
							
						</ul>
					</div>
				</div>
				<div className="fresh_goods_detail">
					<div className="fresh_goods_kindsimg">
						<img src={require('../../../static/images/egg.jpg')}/>
					</div>
					<div className="fresh_goodslist">
						<ul>
							{
								egg[0] && egg.map((item)=>{
									return <li className="fresh_goodslist_li">
											<Link to={`/buy?id=${item.id}`}>
											<p className="fresh_goodsimg"><img src={require(`../../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
											<p className="fresh_goodsname">{item.goodTitle}</p></Link>
											<p className="fresh_goodsprice"><strong>￥{item.newPrice}</strong><span>.00</span>
												<del>￥{item.oldPrice}.00</del>
												<span className="iconfont icon-gouwuche" onClick={this.addItem.bind(this,{id:`${item.id}`,img:`${JSON.parse(item.banner)[0]}`,goodsName:`${item.goodTitle}`,newPrice:`${item.newPrice}`,oldPrice:`${item.oldPrice}`,qty:'1'})}></span>
											</p>
										</li>
								})
							}
						</ul>
					</div>
				</div>
				<div className="fresh_goods_detail">
					<div className="fresh_goods_kindsimg">
						<img src={require('../../../static/images/sea.jpg')}/>
					</div>
					<div className="fresh_goodslist">
						<ul>
							{
								seafood[0] && seafood.map((item)=>{
									return <li className="fresh_goodslist_li">
											<Link to={`/buy?id=${item.id}`}>
											<p className="fresh_goodsimg"><img src={require(`../../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
											<p className="fresh_goodsname">{item.goodTitle}</p></Link>
											<p className="fresh_goodsprice"><strong>￥{item.newPrice}</strong><span>.00</span>
												<del>￥{item.oldPrice}.00</del>
												<span className="iconfont icon-gouwuche" onClick={this.addItem.bind(this,{id:`${item.id}`,img:`${JSON.parse(item.banner)[0]}`,goodsName:`${item.goodTitle}`,newPrice:`${item.newPrice}`,oldPrice:`${item.oldPrice}`,qty:'1'})}></span>
											</p>
										</li>
								})
							}
						</ul>
					</div>
				</div>
				<div className="fresh_goods_detail">
					<div className="fresh_goods_kindsimg">
						<img src={require('../../../static/images/beverage.jpg')}/>
					</div>
					<div className="fresh_goodslist">
						<ul>
							{
								drink[0] && drink.map((item)=>{
									return <li className="fresh_goodslist_li">
											<Link to={`/buy?id=${item.id}`}>
											<p className="fresh_goodsimg"><img src={require(`../../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
											<p className="fresh_goodsname">{item.goodTitle}</p></Link>
											<p className="fresh_goodsprice"><strong>￥{item.newPrice}</strong><span>.00</span>
												<del>￥{item.oldPrice}.00</del>
												<span className="iconfont icon-gouwuche" onClick={this.addItem.bind(this,{id:`${item.id}`,img:`${JSON.parse(item.banner)[0]}`,goodsName:`${item.goodTitle}`,newPrice:`${item.newPrice}`,oldPrice:`${item.oldPrice}`,qty:'1'})}></span>
											</p>
										</li>
								})
							}
						</ul>
					</div>
				</div>
				<div className="fresh_goods_detail">
					<div className="fresh_goods_kindsimg">
						<img src={require('../../../static/images/sweet.jpg')}/>
					</div>
					<div className="fresh_goodslist">
						<ul>
							{
								fruit[0] && fruit.map((item)=>{
									return <li className="fresh_goodslist_li">
											<Link to={`/buy?id=${item.id}`}>
											<p className="fresh_goodsimg"><img src={require(`../../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
											<p className="fresh_goodsname">{item.goodTitle}</p></Link>
											<p className="fresh_goodsprice"><strong>￥{item.newPrice}</strong><span>.00</span>
												<del>￥{item.oldPrice}.00</del>
												<span className="iconfont icon-gouwuche" onClick={this.addItem.bind(this,{id:`${item.id}`,img:`${JSON.parse(item.banner)[0]}`,goodsName:`${item.goodTitle}`,newPrice:`${item.newPrice}`,oldPrice:`${item.oldPrice}`,qty:'1'})}></span>
											</p>
										</li>
								})
							}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state =>({
	loading:state.login.loading,
	data:state.hotSale.data,
	backtop: state.backTop.backtop
})

export default connect(mapStateToProps,Object.assign({},backTopActions,loginActions,hotSaleActions))(BackTrackComponent)