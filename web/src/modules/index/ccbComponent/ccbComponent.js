import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import BackTopComponent from '../../backTop/backTopComponent'
import * as BackTopActions from '../../backTop/backTopAction'
import './ccbComponent.scss'
import '../../../static/font/iconfont.css'
const CCB_IMG= ['ccb1.jpg','ccb2.jpg','ccb3.jpg','ccb4.jpg','ccb5.jpg','ccb6.jpg'];

class CcbComponent extends Component{
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
    	return (
    		<div>
    			<Link to="/index">
    				<div className="back">
	    				<i className="iconfont icon-fanhui"></i>
	    			</div>
    			</Link>
    			
	    		{
					CCB_IMG.map((item)=>{
	    				return <div className="item_img"> 
	    							<img src={require(`../../../static/images/${item}`)}/>
	    						</div>
	    			})
	    		}
    			<BackTopComponent fade={this.props.backtop}/>
    		</div>
    	)
    }
}

const mapStateToProps = state => ({
    backtop: state.backTop.backtop
})

export default connect(mapStateToProps, BackTopActions)(CcbComponent)