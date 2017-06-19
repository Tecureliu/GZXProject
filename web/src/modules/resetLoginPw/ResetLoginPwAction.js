import * as constants from '../../redux/commonConstant'

export function resetLoginPw(phone, password, resetpassword){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'resetLoginPw',
        method: 'post',
        query: {phone, password, resetpassword}
    }
}