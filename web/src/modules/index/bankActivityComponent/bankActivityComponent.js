import React, {Component} from 'react'
import {Link} from 'react-router'
import GobackComponent from '../gobackComponent/gobackComponent'

class BankActivityComponent extends Component{
	constructor(props){
        super(props)
    }
    render(){
    	return (
    		<GobackComponent/>
    	)
    }
}
export default BankActivityComponent