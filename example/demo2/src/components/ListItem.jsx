import React, { Component, PropTypes } from 'react';
import Item from './Item';


export default class ListItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			listData:[{
				imgUrl:'./src/img/demo1.jpg',
				title:'title11111',
				desc:'描述1111'
			},{
				imgUrl:'./src/img/demo2.jpg',
				title:'title2222222',
				desc:'描述22222'
			},{
				imgUrl:'./src/img/demo3.png',
				title:'title33333333',
				desc:'描述33333'
			}]
		}
	}
	componentDidMount(){
		var _this = this;
		fetch('./src/json/queryByqueryBusinessList.json')
			.then(function(res){
				return res.json();
			}).then(function(json){
				var data = json.data.shops.map(function(item){
					return {imgUrl:item.img_mid_url,title:item.shopName,desc:item.address}	
				})
				console.log(data);
				_this.setState({
					listData:data
				})
			})
	}
	render(){
		console.log(Array.isArray( this.state.listData) +'---------')
		var list = this.state.listData.map(function(item,idx){
			return <Item item={item} key={idx} />	
		});
		return (
			<ul>
				{list}
			</ul>
		)
	}
}