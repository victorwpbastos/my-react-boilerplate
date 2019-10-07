import React, { forwardRef } from 'react';

import FormError from '../FormError';
import Masker from '../Masker/index';

const Input = forwardRef(({ label, id, value, mask = '', rules = [], onChange = () => {}, ...rest }, ref) => {
	// const _id = id || `input_${performance.now().toString().replace('.', '')}`;

	function handleChange(e) {
		if (mask) {
			let masked = Masker.mask(e, mask);

			onChange(masked);
		} else {
			onChange(e.target.value);
		}
	}

	return (
		<div className="form-component">
			<FormError value={value} rules={rules}>
				<div className="form-component-input">
					<label>
						<span>{ label }</span>
						<input ref={ref} type="text" value={value} {...rest} onChange={handleChange} />
					</label>
				</div>
			</FormError>
		</div>
	);
});

export default Input;