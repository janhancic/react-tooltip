/** @jsx React.DOM */

'use strict';

var ToolTip = require('../src/react-tooltip.js');
var React = require('react');

window.React = React; // expose so that react dev tools work

var MyComponent = React.createClass({
	render: function() {
		var style = {
			border: '1px solid red'
		};

		return (
			<div style={style}>
				Hello MyComponent!
			</div>
		);
	}
});

var App = React.createClass({
	getInitialState: function() {
		return {
			showTooltip: true
		}
	},

	render: function() {
		var style = {
			position: 'fixed',
			left: '300px',
			top: '150px'
		};

		return (
			<div>
				<p>
					<input type="button" onClick={this._toggle} value="toggle" />
				</p>
				<div>
					<ToolTip show={this.state.showTooltip} position="bottom" message="I am a message.">
						<MyComponent/>
					</ToolTip>
				</div>
				<p>Some other text</p>
			</div>
		);
	},

	_toggle: function() {
		this.setState({showTooltip: !this.state.showTooltip});
	}

});

React.renderComponent(
	<App/>,
	document.body
);