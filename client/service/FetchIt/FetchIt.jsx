var FetchIt = React.createClass({

  propTypes: {
    source: React.PropTypes.string.isRequired,
    data: React.PropTypes.object
  },

  componentDidMount: function() {
    const {source, data, type} = this.props;

    if(type === 'post'){
      $.post(source, function(response) {
        this._passToChildren(response);
      }.bind(this));  
    }

    
  },

  getInitialState: function () {
    return {
      loaded_children : false
    };
  },

  render: function () {
    return (
    	<div>
        {this.state.loaded_children}
      </div>
    )
  },

  _passToChildren: function(response) {
    var childrenWithProps = React.Children.map(this.props.children, function(child) {
        return React.cloneElement(child, { data : response  });
    });

    this.setState({'loaded_children': childrenWithProps});

  }

});