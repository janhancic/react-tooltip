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

	propTypes: {
		show: React.PropTypes.bool.isRequired,
		message: React.PropTypes.string.isRequired
	},

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

		this._addToolTip();
	},

	componentWillUnmount: function() {
		this._removeToolTip();
	},

	componentWillReceiveProps: function(nextProps) {
		if (nextProps.show === false) {
			this._removeToolTip();
		} else {
			this._addToolTip();
		}
	},

	_addToolTip: function() {
		// 1. create a tooltip element & insert it into the body
		this._toolTipEl = createToolTipEl(this.props.message);
		document.body.appendChild(this._toolTipEl);

		// 2. calculate the position of the child, and position it accordingly
		var childEl = this.getDOMNode(); // since we render the child, that is our DOM then
		var childElPos = childEl.getBoundingClientRect();

		this._toolTipEl.style.position = 'fixed';
		this._toolTipEl.style.top = childElPos.top + childElPos.height + 5 + 'px';
		this._toolTipEl.style.left = childElPos.left + 'px';
	},

	_removeToolTip: function() {
		if (!this._toolTipEl) {
			return;
		}

		document.body.removeChild(this._toolTipEl);
		this._toolTipEl = null;
	},

	render: function() {
		return this.props.children;
	},

	_createToolTip: function() {

	}
});

module.exports = ToolTip;