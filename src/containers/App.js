import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import MainLeft from '../components/MainLeft.jsx';
import MainRight from '../components/MainRight.jsx';

export default class App extends Component{
	render(){
		return(
			<div>
				<Header	/>
				<MainLeft />
				<MainRight />
			</div>
		)
		
	}
}
