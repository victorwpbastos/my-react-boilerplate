import React, { forwardRef } from 'react';

import FormError from '../FormError';

const Input = forwardRef(({ label, id, value, rules = [], onChange = () => {}, ...rest }, ref) => {
	const _id = id || `input_${performance.now().toString().replace('.', '')}`;

	function handleChange(e) {
		onChange(e.target.value);
	}

	return (
		<div className="form-component">
			<FormError value={value} rules={rules}>
				<div className="form-component-input">
					<label htmlFor={_id}>{ label }</label>
					<input ref={ref} type="text" id={_id} value={value} {...rest} onChange={handleChange} />
				</div>
			</FormError>
		</div>
	);
});

export default Input;