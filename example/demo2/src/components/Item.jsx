import React ,{Component,PropTypes} from 'react';

export default class Item extends Component{
	render(){
		return(
			<li>
				<img src={this.props.item.imgUrl} alt="" />
				<h4>{this.props.item.title}</h4>
				<p>{this.props.item.desc}</p>
			</li>
		)
	}
}