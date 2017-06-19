import * as types from './hotSaleConstant'


export default function(state = { loading: false,data:[]}, action) {
    let reState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case types.REQUEST:
            reState.loading = true
            // reState.status = false
            break
        case types.SUCCESS:
        	// console.log(action)
        	if(action.body.data){
        		reState.data = action.body
        	}
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case types.FAILURE:
            reState.error = action.error
            reState.loading = false
            // reState.status = false
            break
    }
    //console.log(reState, action)
    return reState;
}

