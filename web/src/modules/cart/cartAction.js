import * as constants from '../../redux/commonConstant'

export function getcartgoods(phone,cart){
	return {
		types:[constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path:'getcartgoods',
		method:'post',
		query:{phone:phone},
		cart:cart
	}
}

export function delcartgoods(id){
	return {
		types:[constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path:'delcartgoods',
		method:'post',
		query:{id}
	}
}

export function updateqty(id,qty){
	return {
		types:[constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path:'updateqty',
		method:'post',
		query:{id,qty}
	}
}

