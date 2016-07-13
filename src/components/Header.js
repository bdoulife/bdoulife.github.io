import React, { Component } from 'react';

export default class Header extends Component{
	render(){
		return(
			<div>
				<h1>北斗前端技术指南</h1>
				<a href="https://github.com/bdoulife/bdoulife.github.io">项目地址</a>
				<h2>应用技术</h2>
				<ul>
					<li>React</li>
					<li>Redux</li>
					<li>Webpack</li>
					<li>ES6</li>
				</ul>
				<h2>从零开始之--demo</h2>
				<ol>
					<li><a href="example/demo1/index.html">React Jsx Demo</a></li>
					<li><a href="example/demo2/index.html">React Webpack ES6+ Demo</a></li>
					<li><a href="example/demo3/index.html">React Webpack ES6+ redux Demo</a></li>
				</ol>
			</div>
		)
	}
}
