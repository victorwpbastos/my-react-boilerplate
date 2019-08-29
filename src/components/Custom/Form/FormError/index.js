import React, { useState, useEffect, useContext } from 'react';
import FormContext from '../Form/FormContext';

const FormError = ({ rules = [], value, children }) => {
	const [errorMessage, setErrorMessage] = useState(null);
	const formContext = useContext(FormContext);

	function setFormState(data) {
		if (formContext) {
			formContext.setState({ ...formContext.state, ...data });
		}
	}

	function execRules() {
		if (rules && Array.isArray(rules)) {
			let errorMessage = null;

			rules.some(rule => {
				errorMessage = rule(value);

				if (errorMessage) {
					return true;
				}

				return false;
			});

			setErrorMessage(errorMessage);
			setFormState({ valid: errorMessage ? false : true });
		}
	}

	useEffect(execRules, [rules, value]);

	return (
		<div className={`form-error ${errorMessage ? 'with-error' : ''}`}>
			{ children }
			<div className="form-error-message">
				{ errorMessage }
			</div>
		</div>
	);
};

export default FormError;