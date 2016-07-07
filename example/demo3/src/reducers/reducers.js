import { combineReducers } from 'redux';
import { DEL_ITEM,RECEIVE_DATA } from '../action/actions';


function del(state = [],action){
	switch(action.type){
		case DEL_ITEM:
			let newState = state.slice();
			newState.splice(action.idx,1);
			return newState;
		default:
			return state;
	}
}

function initalData(state = [],action){
	switch(action.type){
		case RECEIVE_DATA:
			return action.arr;
		case DEL_ITEM:
			let newState = state.slice();
			newState.splice(action.idx,1);
			return newState;
		default:
			return state;
	}
}


export default combineReducers({
	del,
	initalData
});