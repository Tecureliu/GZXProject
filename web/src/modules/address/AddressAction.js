import * as constants from '../../redux/commonConstant'

export function address(phone){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'address',
        method: 'post',
        query: {phone}
    }
}