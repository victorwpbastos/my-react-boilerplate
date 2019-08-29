import React from 'react';

import pkg from '../../../package.json';

const Footer = () => (
	<footer style={{minHeight: '70px'}} className="flex justify-center align-center text-14">
		<span>{ pkg.organization } - v{ pkg.version }</span>
	</footer>
);

export default Footer;