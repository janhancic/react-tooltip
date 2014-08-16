/** @jsx React.DOM */

'use strict';

var React = require('react');

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

	render: function() {
		return React.Children.only(this.props.children);
	}
});

module.exports = ToolTip;