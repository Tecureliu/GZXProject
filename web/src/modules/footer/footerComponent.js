import React,{Component} from 'react'
import {Link,browserHistory,hashHistory} from 'react-router'
import './footer.scss'





                            

const LINK_ICON = [['/index','icon-shouyeshouye','首页'],['/carlist','icon-fenlei','分类'],['/eat','icon-miantiao-szxdf','吃面吧'],['/cart','icon-gouwuche','购物车'],['/mygzx','icon-wo1','果珍鲜']];

class  FooterComponent extends Component{
	
	componentDidMount(){
		// console.log(hashHistory.getCurrentLocation().pathname)
		let routeName = hashHistory.getCurrentLocation().pathname;
		for(let attr in this.refs){
			if(attr == routeName){
				this.refs[attr].className = 'footer_active';
			}

		}
		// console.log(routeName,this.refs)
		if(routeName == '/orders' || routeName == '/address' || routeName == '/coupon' || routeName =='/setting'){
			this.refs['/mygzx'].className = 'footer_active';
		}
		if(routeName == '/ddlist'){
			this.refs['/carlist'].className = 'footer_active';
		}
	}
	render(){
		return (

			<footer>
				{
					LINK_ICON.map((item,idx)=>{
						return 	<p key={idx} ref={item[0]} >
				       				<Link to={item[0]}>
				       				<i className={`iconfont ${item[1]}`}></i>
				           			<br/><span>{item[2]}</span></Link>
			       				</p>
				       			
					})
				}
       			
       		</footer>
		)
	}
}
export default FooterComponent