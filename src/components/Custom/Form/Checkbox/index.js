import React from 'react';

const Checkbox = ({ label, id, data, value, checked = false, inline = true, onChange = () => {}, ...rest }) => {
	const _id = id || `checkbox_${performance.now().toString().replace('.', '')}`;

	if (data) {
		if (Array.isArray(data)) {
			if (data.includes(value)) {
				checked = true;
			}
		} else {
			checked = value === data;
		}
	}

	function handleChange(e) {
		let emittedValue;

		if (data && Array.isArray(data)) {
			if (e.target.checked) {
				emittedValue = [...data, e.target.value];
			} else {
				emittedValue = data.filter(v => v !== e.target.value);
			}
		} else {
			emittedValue = e.target.checked;
		}

		onChange(emittedValue);
	}

	return (
		<div className={`form-component ${inline ? 'inline' : ''}`}>
			<label className="form-component-checkbox">
				<input type="checkbox" id={_id} value={value} checked={checked} {...rest} onChange={handleChange} />
				<span>{ label }</span>
			</label>
		</div>
	);
};

export default Checkbox;