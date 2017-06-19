import * as types from './backTopConstant'

export  function index(){
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