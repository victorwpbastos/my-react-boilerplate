import React from 'react';

import pkg from '../../../package.json';

const Header = ({ fixed }) => {
	const styles = {
		minHeight: '70px',
		boxShadow: '0 2px 2px -1px rgba(0, 0, 0, 0.35)',
		position: fixed ? 'absolute' : null,
		top: fixed ? 0 : null
	};

	if (fixed) {
		document.body.style.paddingTop = '70px';
	}

	return (
		<header style={ styles } className={`flex align-center pa-20 bg-gray-8 text-white text-bolder text-uppercase ${fixed && 'header-app'}`}>
			{ pkg.name }
		</header>
	);
};

export default Header;