var Loader = React.createClass({

	componentWillMount: function () {
		console.log(this.state);
	},

  render: function () {
  	const {type} = this.props;
  	const loadingMessage = this._getMessage(type);
  	
    return (
    	<div className="component loader">
    	 {loadingMessage}
    	</div>
    )
  },

  _getMessage: function (type) {
  	switch(type){
  		case 'location_loading':
  			return 'Sup Bro? I\'m finding your location.';
  		break;
  	}
  }	

});