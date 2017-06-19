import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './AboutUsComponent.scss'




class AboutUsComponent extends React.Component {
    
    render() {
        return (
            <div className="aboutUs">
                <div className="aboutUs-top">
                    <Link to="/setting" className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>关于我们</h4>
                </div>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-0.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-1.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-2.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-3.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-4.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-5.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-6.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-7.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-8.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-9.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-10.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-11.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-12.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-13.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-14.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-15.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-16.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-17.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-18.jpg" alt=""/>
               <img src="../../src/static/images/mygzx-aboutus/mygzx-aboutus-19.jpg" alt=""/>
            </div>
            
        )
    }
}

export default AboutUsComponent