import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.scss';

const MainLayout = ({ children }) => {
	return (
		<div className="flex flex-column h-100">
			<Header fixed />

			<main className="container my-20 mx-auto pa-20 bg-white shadow text-blue-9">
				{ children }
			</main>

			<Footer />
		</div>
	);
};

export default MainLayout;