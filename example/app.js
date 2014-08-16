/** @jsx React.DOM */

'use strict';

var ToolTip = require('../src/react-tooltip.js');
var React = require('react');

window.React = React; // expose so that react dev tools work

React.renderComponent(
	<div>
		<p>Some text</p>
		<div>
			<ToolTip show={true} position="bottom">
				<input type="text" defaultValue="Hello" />
			</ToolTip>
		</div>
		<p>Some other text</p>
	</div>,
	document.body
);