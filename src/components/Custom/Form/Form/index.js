import React, { useState, useEffect, forwardRef } from 'react';

import FormContext from './FormContext';

const Form = forwardRef(({children, valid = () => {}, onSubmit = () => {}}, ref) => {
	const [state, setState] = useState({
		valid: true
	});

	useEffect(() => {
		valid(state.valid);
	}, [state.valid, valid]);

	function handleSubmit(e) {
		e.preventDefault();

		onSubmit(state);
	}

	return (
		<FormContext.Provider value={{state, setState}}>
			<form ref={ref} onSubmit={handleSubmit}>
				{ children }
			</form>
		</FormContext.Provider>
	);
});

export default Form;