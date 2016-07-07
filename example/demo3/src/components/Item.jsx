import React ,{Component,PropTypes} from 'react';

export default class Item extends Component{
	handleClick(e){
		e.preventDefault();
		this.props.onClick();
	}
	render(){
		return(
			<li onClick = {e => this.handleClick(e) }>
				<img src={this.props.item.img_mid_url} alt="" />
				<h4>{this.props.item.shopName}</h4>
				<p>{this.props.item.address}</p>
			</li>
		)
	}
}