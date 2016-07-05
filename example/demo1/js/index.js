var ItemList = React.createClass({

	getInitialState(){
		return {
			listData:[{
				imgUrl:'./img/demo1.jpg',
				title:'title11111',
				desc:'描述1111'
			},{
				imgUrl:'./img/demo2.jpg',
				title:'title2222222',
				desc:'描述22222'
			},{
				imgUrl:'./img/demo3.png',
				title:'title33333333',
				desc:'描述33333'
			}]
		}	
	},
	componentDidMount(){
		var _this = this;
		fetch('./json/queryByqueryBusinessList.json')
			.then(function(res){
				return res.json();
			}).then(function(json){
				console.log(json);
				var data = json.data.shops.map(function(item){
					return {imgUrl:item.img_mid_url,title:item.shopName,desc:item.address}	
				})
				_this.setState({
					listData:data
				})
			})
	},
	render(){
		var list = this.state.listData.map(function(item,idx){
			return <Item item={item} key={idx} />	
		})
		return (
			<ul>
				{list}
			</ul>
		)
	}	
});
var Item = React.createClass({
	render(){
		return(
			<li>
				<img src={this.props.item.imgUrl} onerror="this.src={'\./img/dft.jpg'}" alt="" />
				<h4>{this.props.item.title}</h4>
				<p>{this.props.item.desc}</p>
			</li>
		)
	}
});
ReactDOM.render(<ItemList />,document.getElementById('app'));