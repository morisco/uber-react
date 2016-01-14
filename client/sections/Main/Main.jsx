var Main = React.createClass({

	getInitialState: function() {
    return {
    	location: false
    };
  },

  componentWillMount: function () {
  	this._getLocation();
  },

  render: function () {
  	var MasterModule = '';

  	if (this.state.location)
      MasterModule = <Home location={this.state.location} />;
  	else
      MasterModule = <Loader type="location_loading" />;
  		
    return (
    	<div className="wrapper main">
    	 {MasterModule}
    	</div>
    )
  },

  _getLocation: function () {
  	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        	this.setState({ location : position })
        }.bind(this));
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
});