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
		var list = listData.map(function(item,idx){
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
		listData:state.initalData.length ? state.initalData : state.del
	}
}

export default connect(test)(ListItem)