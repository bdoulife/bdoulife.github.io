import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { delItem ,fetchDataIfNeeded} from '../action/actions';
import Item from './Item';


class ListItem extends Component{
	componentDidMount(){
		this.props.dispatch(fetchDataIfNeeded());
	}
	render(){
		const {dispatch ,listData} = this.props;
		let _list = listData.delItem
		if(listData.getInitalData.length){
			_list = listData.getInitalData;
		}
		var list = _list.map(function(item,idx){
			return <Item item={item} 
				onClick={ () => dispatch(delItem(idx)) } 
				key={idx} />
		});
		return (
			<ul>
				{list}
			</ul>
		)
	}
}

function test(state){
	return {
		listData:state
	}
}

export default connect(test)(ListItem)