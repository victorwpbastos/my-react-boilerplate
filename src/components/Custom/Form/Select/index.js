import React, { cloneElement, forwardRef } from 'react';

import FormError from '../FormError';

const OptionsCounter = ({ value, maxLength }) => {
	let message;

	if (maxLength) {
		message = `${value.length} / ${maxLength} opção(ões) restante(s)`;
	} else {
		message = `${value.length} opção(ões) selecionadas`;
	}

	return (
		<span className="form-text-info">{ message }</span>
	);
};

const Select = forwardRef(({ label, id, value, compareBy, multiple = false, rules = [], onChange = () => {}, children, ...rest }, ref) => {
	children = Array.isArray(children) ? children : [children];

	const values = children.map(child => child.props.value);

	if (compareBy) {
		try {
			if (multiple) {
				let arr = value.map(v => v[compareBy]);

				if (value && !arr.length) {
					throw Error(`The compareBy prop "${compareBy}" was not found on the supplied object.`);
				}

				value = arr;
			} else {
				if (value && (value[compareBy] === undefined)) {
					throw Error(`The compareBy prop "${compareBy}" was not found on the supplied object.`);
				}

				value = value[compareBy];
			}

			children = children.map(child => cloneElement(child, { value: child.props.value[compareBy] }));
		} catch (error) {
			console.error(error);
		}
	}

	function handleChange(e) {
		const target = e.nativeEvent.target;
		const options = [...target.options];
		let emittedValue;

		// single value
		if (!multiple && !compareBy) {
			emittedValue = target.value.toString();
		}

		// single value && compareBy
		if (!multiple && compareBy) {
			emittedValue = values.find(v => v[compareBy].toString() === target.value.toString());
		}

		// multiple value
		if (multiple && !compareBy) {
			emittedValue = options.filter(opt => opt.selected).map(opt => opt.value.toString());
		}

		// multiple value && compareBy
		if (multiple && compareBy) {
			const selected = options.filter(opt => opt.selected).map(opt => opt.value.toString());

			emittedValue = values.filter(v => selected.includes(v[compareBy].toString()));
		}

		onChange(emittedValue);
	}

	return (
		<div className="form-component">
			<FormError value={value} rules={rules}>
				<div className="form-component-select">
					<label>
						<span>{ label }</span>
						<select ref={ref} size={multiple ? children.length : null} value={value} multiple={multiple} {...rest} onChange={handleChange}>
							{ children }
						</select>
						{ multiple && <OptionsCounter value={value} maxLength={rest.maxLength} /> }
					</label>
				</div>
			</FormError>
		</div>
	);
});

export default Select;