import React,{ Component } from 'react';
import {render} from 'react-dom';
import ListItem from './components/ListItem';

let ele = document.getElementById('app')

render(
	<ListItem />,
	ele
);