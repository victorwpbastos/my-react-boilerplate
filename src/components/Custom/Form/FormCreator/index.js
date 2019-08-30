import React from 'react';
import Input from '../Input';
import Select from '../Select';

const FormCreator = ({ schema = [] }) => {
	const fields = schema.map(({cols, items, ...rest}) => {
		return <div key={rest.label} className={cols ? `col-${cols}` : ''}>
			{ items && items.length && (
				<Select {...rest}>
					{ items.map(item => (<option key={item.text || item} value={item}>{ item.text || item }</option>)) }
				</Select>
			)}

			{ !items && (
				<Input {...rest} />
			)}
		</div>;
	});

	return fields;
};

export default FormCreator;