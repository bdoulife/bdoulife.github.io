import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducers from '../reducers/reducers';

let creator = applyMiddleware(thunk)(createStore)
export function createStorer(data){
	return creator(reducers,data);
}