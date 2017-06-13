import React from 'react'
import {Route,IndexRoute} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
import IndexComponent from './modules/index/IndexComponent'
import CcbComponent from './modules/index/ccbComponent/ccbComponent'
import QdComponent from './modules/index/qiandao/qdComponent'
import CarlistComponent from './modules/carlist/CarlistComponent'

export default (
    <Route path="/" component={AppComponent}>
    	<Route path="index" component={IndexComponent}/>
    	<Route path="ccb" component={CcbComponent}/>
    	<Route path="qiandao" component={QdComponent}/>
		<Route path="carlist" component={CarlistComponent}/>
        <Route path="login" component={LoginComponent} />
    </Route>
)