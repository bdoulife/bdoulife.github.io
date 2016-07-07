// action 类型
export const DEL_ITEM = 'DEL_ITEM';
export const RECEIVE_DATA = 'RECEIVE_DATA';



// 创建函数
export function delItem(idx){
	return {
		type:DEL_ITEM,
		idx
	}
}

function receiveData(arr) {
	return{type:RECEIVE_DATA,
	arr}
}
export function fetchDataIfNeeded(){
	return (dispatch,getState) => {
		fetch('../src/json/queryByqueryBusinessList.json')
			.then(response => response.json())
			.then(json => { dispatch(receiveData(json.data.shops))})
	}
}