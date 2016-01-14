var Product = React.createClass({
  render: function () {
    const {product} = this.props;
    return (
    	<li>
    		{product.display_name}
    	</li>
    )
  }
});