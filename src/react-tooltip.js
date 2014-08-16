/** @jsx React.DOM */

'use strict';

var React = require('react');

function createToolTipEl(message) {
	var el = document.createElement('DIV');
	el.className = 'rtt-tooltip-container';
	el.innerHTML = message;

	return el;
}

var ToolTip = React.createClass({
	displayName: 'ToolTip',

	componentWillMount: function() {
		var numOfChildren = React.Children.count(this.props.children);

		if (numOfChildren === 0) {
			throw new Error('ToolTip must contain a child element/component.');
		} else if (numOfChildren > 1) {
			throw new Error('ToolTip can contain only one child element/component.');
		}
	},

	componentDidMount: function() {
		if (this.props.show === false) {
			return;
		}

		// 1. create a tooltip element & insert it into the body
		var toolTipEl = createToolTipEl(this.props.message);
		document.body.appendChild(toolTipEl);

		// 2. calculate the position of the child, and position it accordingly
		debugger;
	},

	render: function() {
		var child = React.Children.only(this.props.children);

		// add ref to child // TODO: if ref is already there read it and store it, so it doesn't tread on other components
		//child.props.ref = 'rtt-target';

		return child;
	},

	_createToolTip: function() {

	}
});

module.exports = ToolTip;