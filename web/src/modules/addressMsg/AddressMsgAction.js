import * as constants from '../../redux/commonConstant'

export function addressMsg(addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate, addressuseraddressDefault){
    console.log(222);
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'addressMsg',
        method: 'post',
        query: {addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate, addressuseraddressDefault}
    }
}



export function addressMsgSetDefault(addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate, addressuseraddressDefault){
    //console.log(111)
    return{
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'addressMsgDefault',
        method: 'post',
        query:{addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate, addressuseraddressDefault}
    }
}

export function addressMsgSetNoDefault(addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate, addressuseraddressDefault){
    return{
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'addressMsgNoDefault',
        method: 'post',
        query:{addressusername, addressuserphone, phone, addresssheng, addressusercity, addressuserqu, addressuseraddress, addressuseraddresslx, myDate, addressuseraddressDefault}
    }
}