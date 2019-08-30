import React, { forwardRef } from 'react';

import FormError from '../FormError';

const Input = forwardRef(({ label, id, value, mask = '', rules = [], onChange = () => {}, ...rest }, ref) => {
	const _id = id || `input_${performance.now().toString().replace('.', '')}`;
	const maskMap = {
		'#': /\d/,
		'A': /[A-Z]/,
		'a': /[a-z]/
	};
	const filteredMask = mask.split('').filter(c => Object.keys(maskMap).includes(c));

	function applyMask(val = '') {
		let arrMask = mask.split('');
		let masked = val.split('');
		let indexes = [];
		let unmasked = [];

		arrMask.forEach((char, index) => {
			if (!maskMap[char]) {
				indexes.push({ char, index });
			}
		});

		// console.log('', unmasked);
		// TODO: consertar a mascara

		indexes.forEach(({ char, index }) => {
			console.log((arrMask.length - index), index);
			if ((masked.length - index) > index && masked[index] !== char) {
				masked.splice(index, 0, char);
			}
		});

		console.log('masked', masked.join(''), val);

		// return val;
		return masked.join('');
	}

	function removeMask(val = '') {
		let unmasked = [];
		let arrMask = mask.split('');
		let indexes = [];

		arrMask.forEach((char, index) => {
			if (!maskMap[char]) {
				indexes.push(index);
			}
		});

		unmasked = val.split('').filter((char, index) => !indexes.includes(index));
		// console.log(val, indexes);

		// indexes.forEach(({ char, index }) => {
		// 	if (unmasked.length < index) {
		// 		unmasked.splice(index, 1);
		// 	}
		// });

		console.log('unmasked', unmasked, val, indexes);

		return unmasked.join('');
	}

	function allowChange(e) {
		const char = e.nativeEvent.data;
		const charIndex = e.target.value.length - 1;
		const maskChar = filteredMask[charIndex];

		if (char === null) {
			return true;
		}

		if (maskChar && maskMap[maskChar]) {
			return maskMap[maskChar].test(char);
		}

		return false;
	}

	function handleChange(e) {
		if (mask) {
			if (allowChange(e)) {
			// let unmasked = removeMask(e.target.value);
				let masked = applyMask(e.nativeEvent.target.value);

				onChange(masked);
			}
		} else {
			onChange(e.target.value);
		}

		// if (mask) {
		// 	onChange(applyMask(e.target.value));
		// } else {
		// 	console.log(e.target.value);
		// 	onChange(e.target.value);
		// }
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