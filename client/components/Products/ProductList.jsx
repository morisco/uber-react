var ProductList = React.createClass({
  render: function () {
    console.log(this.props.data);
    const {products} = this.props.data;
    return (
    	<div className="component product-list">
        <ul>
          {products.map((product, i) => (
            <Product product={product} />
          ))}
        </ul>
    	</div>
    )
  }
});