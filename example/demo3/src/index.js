import React,{ Component } from 'react';
import {render} from 'react-dom';
import ListItem from './components/ListItem';
import {Provider} from 'react-redux';

import { createStorer } from './store/createStore';

let ele = document.getElementById('app')

let dftData = [{
		img_mid_url:'./src/img/demo1.jpg',
		shopName:'title11111',
		address:'描述1111'
	},{
		img_mid_url:'./src/img/demo2.jpg',
		shopName:'title2222222',
		address:'描述22222'
	},{
		img_mid_url:'./src/img/demo3.png',
		shopName:'title33333333',
		address:'描述33333'
	}];
let store = createStorer({'delItem':dftData,'getInitalData':[]});
render(
	<Provider store = {store}><ListItem /></Provider>,
	ele
);