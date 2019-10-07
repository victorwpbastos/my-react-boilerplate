import React, { forwardRef } from 'react';
import FormError from '../FormError';

const CharsCounter = ({ value, maxLength }) => {
	let message;

	if (maxLength) {
		message = `${value.length} / ${maxLength} caracter(es) restante(s)`;
	} else {
		message = `${value.length} caracter(es)`;
	}

	return (
		<span className="form-text-info">{ message }</span>
	);
};

const Textarea = forwardRef(({ label, id, value, rules = [], onChange = () => {}, ...rest }, ref) => {
	if (rest.maxLength) {
		value = value.substring(0, rest.maxLength);
	}

	function handleChange(e) {
		onChange(e.target.value);
	}

	return (
		<div className="form-component">
			<FormError value={value} rules={rules}>
				<div className="form-component-textarea">
					<label>
						<span>{ label }</span>
						<textarea ref={ref} value={value} onChange={handleChange} {...rest} />
						<CharsCounter value={value} maxLength={rest.maxLength} />
					</label>
				</div>
			</FormError>
		</div>
	);
});

export default Textarea;