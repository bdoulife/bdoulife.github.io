import React, { Component } from 'react';
import Item from './Item';


class ListItem extends Component{
	render(){
		const {itemClick ,listData} = this.props;
		var list = listData.map(function(item,idx){
			return <Item item={item} 
				onClick={ () => itemClick(idx) } 
				key={idx} />
		});
		return (
			<div>
				<button onClick={this.props.showAllClick}>显示全部</button>
				<ul>
					{list}
				</ul>
			</div>
		)
	}
}

export default ListItem