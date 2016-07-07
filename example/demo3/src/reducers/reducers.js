import { combineReducers } from 'redux';
import { DEL_ITEM,RECEIVE_DATA } from '../action/actions';


function delItem(state = [],action){
	switch(action.type){
		case DEL_ITEM:
			console.log(action)
			let newState = state.slice();
			newState.splice(action.idx,1);
			return newState;
		default:
			return state;
	}
}

function getInitalData(state = [],action){
	switch(action.type){
		case RECEIVE_DATA:
			return action.arr;
		default:
			return state;
	}
}


export default combineReducers({
	delItem,
	getInitalData
});