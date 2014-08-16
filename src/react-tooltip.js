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
		var childEl = this.getDOMNode(); // since we render the child, that is our DOM then
		var childElPos = childEl.getBoundingClientRect();

		toolTipEl.style.position = 'absolute';
		toolTipEl.style.top = childElPos.top + childElPos.height + 5 + 'px';
		toolTipEl.style.left = childElPos.left + 'px';
	},

	render: function() {
		return this.props.children;
	},

	_createToolTip: function() {

	}
});

module.exports = ToolTip;