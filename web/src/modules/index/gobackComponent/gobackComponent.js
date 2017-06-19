import React, {Component} from 'react'
import {Link} from 'react-router'
import './goback.scss'
import '../../../static/font/iconfont.css'

class GobackComponent extends Component{
	constructor(props){
        super(props)
    }
    render(){
    	return (
    		<div>
    			<Link to="/index">
    				<div className="back">
	    				<i className="iconfont icon-fanhui"></i>
	    			</div>
    			</Link>
                <h1>敬请期待......</h1>
    		</div>
    	)
    }
}
export default GobackComponent