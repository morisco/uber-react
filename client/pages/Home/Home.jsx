var Home = React.createClass({

	getInitialState: function() {
    return {
    	location: false
    };
  },

  render: function () {
    const {location} = this.props;
    const source = '/api/uber/products/' + location.coords.latitude + '/' + location.coords.longitude;

    return (
    	<div className="page home">
    	 <FetchIt source={source} type="post">
          <ProductList />
        </FetchIt>
    	</div>
    )
  }
});