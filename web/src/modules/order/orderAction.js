import * as constants from '../../redux/commonConstant'

export function cart(username, password){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'cart',
        method: 'post',
        query: {username, password}
    }
}

export function getcartgoods(phone){
	return {
		types:[constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path:'getcartgoods',
		method:'post',
		query:{phone:phone}
	}
}
export function addOrders(phone,ordersId,tatalPrice,allqty){
	return {
		types:[constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path:'addOrders',
		method:'post',
		query:{phone,ordersId,tatalPrice,allqty}
	}
}