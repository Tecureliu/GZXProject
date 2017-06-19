import * as types from './hotSaleConstant'

export function addItem(obj){
	// console.log(111);
	return {
		types: [types.REQUEST,types.SUCCESS,types.FAILURE],
		path: 'addItem',
		method: 'post',
		query: obj
	}
	
}
