import React, { forwardRef } from 'react';

const Radio = forwardRef(({ label, id, data, value, checked = false, inline = true, onChange = () => {}, ...rest }, ref) => {
	const _id = id || `radio_${performance.now().toString().replace('.', '')}`;

	checked = value === data;

	function handleChange(e) {
		let emittedValue;

		if (e.target.value === 'true') {
			emittedValue = true;
		}

		if (e.target.value === 'false') {
			emittedValue = false;
		}

		onChange(emittedValue);
	}

	return (
		<div className={`form-component ${inline ? 'inline' : ''}`}>
			<label className="form-component-radio">
				<input ref={ref} type="radio" id={_id} value={value} checked={checked} {...rest} onChange={handleChange} />
				<span>{ label }</span>
			</label>
		</div>
	);
});

export default Radio;