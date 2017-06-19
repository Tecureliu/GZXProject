import * as constants from '../../redux/commonConstant'

export function login(username, password, verificationCode){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'login',
        method: 'post',
        query: {username, password, verificationCode}
    }
}

export function hotsale(){
	return {
		types:[constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path:'fetchGoods',
		method:'post',
		query:{}
	}
}
