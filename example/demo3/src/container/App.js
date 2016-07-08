import React,{Component} from 'react';
import { connect } from 'react-redux';
import { delItem ,fetchDataIfNeeded} from '../action/actions';
import ListItem from '../components/ListItem';

class App extends Component{
	constructor(props){
		super(props);
		this.itemClick = this.itemClick.bind(this);
	}
	componentDidMount(){
		this.props.dispatch(fetchDataIfNeeded());
	}
	itemClick(idx){
		this.props.dispatch(delItem(idx))
	}
	render(){
		return(
			<ListItem listData={this.props.listData} itemClick={this.itemClick}  />	
		)
	}
}

function test(state){
	return {
		listData:state.initalData.length ? state.initalData : state.del
	}
}

export default connect(test)(App)