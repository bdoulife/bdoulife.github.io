import React, { Component } from 'react';
import './MainLeft.scss';
export default class MainLeft extends Component{
	render(){
		return(
			<div className="left-wrap">
				<ul>
					<li className="active">当下</li>
					<li>展望</li>
				</ul>
			</div>
		)
	}
}
