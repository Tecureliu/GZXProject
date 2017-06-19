import React,{Component} from 'react'
import {Link,browserHistory,hashHistory} from 'react-router'
import {connect} from 'react-redux'
import './remai.scss'
import BackTopComponent from '../../backTop/backTopComponent'
import SpinnerComponent from '../../spinner/SpinnerComponent'
import * as BackTopActions from '../../backTop/backTopAction'
import * as LoginActions from '../../login/LoginAction'
import * as hotSaleActions from './hotSaleAction'

const GOODS_KINDS = [require('../../../static/images/fresh_fruit.jpg'),require('../../../static/images/meat.jpg'),require('../../../static/images/seafood.jpg'),require('../../../static/images/fastfood.jpg')]
class RemaiComponent extends Component{
	constructor(props){
        super(props)
        this.state={
        	phone:null,
        	cartClassName:null,
        	span:null
        }
    }
    componentWillMount(){
    	this.props.hotsale()
    	if(localStorage.getItem('data')){
    		let userPhone = JSON.parse(localStorage.getItem('data')).phone;
    		this.setState({
    			phone:userPhone
    		})
    	}
    }
    componentDidMount(){
    	window.addEventListener('scroll',this.orderScroll.bind(this));

    }
    orderScroll(){
    	// console.log(111)
    	
    	this.props.index()
    }
    addItem(obj){
    	obj.phone = this.state.phone
    	// console.log(obj)
    	!this.state.phone ? hashHistory.push('/login') : this.props.addItem(obj).then(response=>{
    		// console.log(response)
    		if(response.type == 'SUCCESS'){
    			this.setState({
		    		cartClassName:'changeBig',
		    		span:'addOne'
		    	})
		    	setTimeout(()=>{
		    		this.setState({
			    		cartClassName:null,
			    		span:null
			    	})
		    	},400)
    		}
			
    	})
    	
    	
    }
	render(){
		
		// console.log(this.props.data.data)
		let data;
		for(let attr in this.props.data){
			attr == 'data' ? data=this.props.data[attr] : data=[];
		}
		// console.log(Array.isArray(data))
		let fruit = [];
		let meat = [];
		let seafood = [];
		let fastfood = [];
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
				if(item.bigKind == '方便速食'){
					fastfood.push(item);
				}
			})
		}
		// console.log(meat)
		return (
			<div className="container">
				<SpinnerComponent show={this.props.loading}/>
				<BackTopComponent fade={this.props.backtop}/>
				<Link to="/cart">
					<div className="btn_cart">
						<img src={require('../../../static/images/btn-cart.png')} className={this.state.cartClassName}/>
						<span className={this.state.span}>+1</span>
					</div>
				</Link>
				<Link to="/index">
    				<div className="remai_back">
	    				<i className="iconfont icon-fanhui"></i>
	    			</div>
    			</Link>
				<div className="top_banner">
					<img src={require('../../../static/images/top_banner.jpg')}/>
				</div>
				<div className="fresh_fruit">
					<div className="fresh_fruit_img"><img src={require('../../../static/images/fresh_fruit.jpg')}/></div>
					<div className="fresh_fruit_goods">
						<ul>
							{

								fruit.map((item)=>{
									return <li className="goods_detail">
												<Link to={`/buy?id=${item.id}`}>
												<p className="detail_img"><img src={require(`../../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
												<p className="detail_goods_name">{item.goodTitle}</p></Link>
												<p className="detail_price">
													<strong>￥{item.newPrice}</strong><span>.00</span>
													<del>￥{item.oldPrice}.00</del>
													<span className="iconfont icon-gouwuche" onClick={this.addItem.bind(this,{id:`${item.id}`,img:`${JSON.parse(item.banner)[0]}`,goodsName:`${item.goodTitle}`,newPrice:`${item.newPrice}`,oldPrice:`${item.oldPrice}`,qty:'1'})}></span>
												</p>
											</li>
								})
							}
						</ul>
					</div>
				</div>
				<div className="fresh_fruit">
					<div className="fresh_fruit_img"><img src={require('../../../static/images/meat.jpg')}/></div>
					<div className="fresh_fruit_goods">
						<ul>
							{
								meat.map((item)=>{
									return <li className="goods_detail">
												<Link to={`/buy?id=${item.id}`}>
												<p className="detail_img"><img src={require(`../../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
												<p className="detail_goods_name">{item.goodTitle}</p></Link>
												<p className="detail_price">
													<strong>￥{item.newPrice}</strong><span>.00</span>
													<del>￥{item.oldPrice}.00</del>
													<span className="iconfont icon-gouwuche" onClick={this.addItem.bind(this,{id:`${item.id}`,img:`${JSON.parse(item.banner)[0]}`,goodsName:`${item.goodTitle}`,newPrice:`${item.newPrice}`,oldPrice:`${item.oldPrice}`,qty:'1'})}></span>
												</p>
											</li>
								})
							}
						</ul>
					</div>
				</div>
				<div className="fresh_fruit">
					<div className="fresh_fruit_img"><img src={require('../../../static/images/seafood.jpg')}/></div>
					<div className="fresh_fruit_goods">
						<ul>
							{
								seafood.map((item)=>{
									return <li className="goods_detail">
												<Link to={`/buy?id=${item.id}`}>
												<p className="detail_img"><img src={require(`../../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
												<p className="detail_goods_name">{item.goodTitle}</p></Link>
												<p className="detail_price">
													<strong>￥{item.newPrice}</strong><span>.00</span>
													<del>￥{item.oldPrice}.00</del>
													<span className="iconfont icon-gouwuche" onClick={this.addItem.bind(this,{id:`${item.id}`,img:`${JSON.parse(item.banner)[0]}`,goodsName:`${item.goodTitle}`,newPrice:`${item.newPrice}`,oldPrice:`${item.oldPrice}`,qty:'1'})}></span>
												</p>
											</li>
								})
							}
						</ul>
					</div>
				</div>
				<div className="fresh_fruit">
					<div className="fresh_fruit_img"><img src={require('../../../static/images/fastfood.jpg')}/></div>
					<div className="fresh_fruit_goods">
						<ul>
							{
								fastfood.map((item)=>{
									return <li className="goods_detail">
												<Link to={`/buy?id=${item.id}`}>
												<p className="detail_img"><img src={require(`../../../static/imgs/${JSON.parse(item.banner)[0]}`)}/></p>
												<p className="detail_goods_name">{item.goodTitle}</p></Link>
												<p className="detail_price">
													<strong>￥{item.newPrice}</strong><span>.00</span>
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
const mapStateToProps = state => ({
    backtop: state.backTop.backtop,
    loading: state.login.loading,
    data:state.hotSale.data
    
})
export default connect(mapStateToProps, Object.assign({},BackTopActions,LoginActions,hotSaleActions))(RemaiComponent)
// export default RemaiComponent