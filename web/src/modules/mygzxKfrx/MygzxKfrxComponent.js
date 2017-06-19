import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './MygzxKfrxComponent.scss'




class MygzxKfrxComponent extends React.Component {
    
    render() {
        return (
            <div className="mygzxKfrx">
               <div className="mygzxKfrx-body">
                    <div className="mygzxKfrx-body-top">
                        <span>提示</span>
                        <span>确定拨打电话：400-888-8888 吗？</span>
                        
                    </div>
                    <div className="mygzxKfrx-body-bottom">
                        <Link to="/mygzx" className="mygzxKfrx-body-bottom-left">取消</Link>
                        
                        <a href="tel:4008888888" className="mygzxKfrx-body-bottom-right">确定</a>
                    </div>
               </div>
            </div>
            
        )
    }
}

export default MygzxKfrxComponent