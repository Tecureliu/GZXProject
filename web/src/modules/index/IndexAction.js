import * as types from './indexConstant'

export function index(){
	// console.log(window.pageYOffset)
	if (window.pageYOffset >= 500) {
      return {
      	type:types.FADEIN
      }
    }
	return {
		type:types.FADEOUT
	}
   
}