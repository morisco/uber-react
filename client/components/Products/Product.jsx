var Product = React.createClass({
  render: function () {
    const {product} = this.props;
    console.log(product);
    return (
    	<li>
    		{product.display_name}
    	</li>
    )
  }
});