import * as constants from '../../redux/commonConstant'

export function orderDetail(phone){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'orderDetail',
        method: 'post',
        query: {phone}
    }
}