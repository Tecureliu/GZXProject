import * as types from './backTopConstant'

export default function(state = {backtop:false},action){
	let reState = JSON.parse(JSON.stringify(state));
	// console.log(reState)
	switch(action.type){
		case types.FADEIN:
		
			reState.backtop = true;
			break;
		case types.FADEOUT:
			reState.backtop = false;
			break;
		default :
			reState.backtop = false;
	}
	return reState;
}