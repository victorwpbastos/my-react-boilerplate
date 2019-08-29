import React, { forwardRef } from 'react';

import './styles.css';

const Table = forwardRef(({ id, headers = [], bordered = false, darkheader = false, items = [], onRowClick = () => {}, renderRow = () => {}, children, ...rest }, ref) => {
	const _id = id || `table_${performance.now().toString().replace('.', '')}`;

	// function handleRowClick(e) {
	// 	onRowClick(e.target.value);
	// }
	const Header = () => (
		<thead>
			<tr>
				{ headers.map(({ label, ...rest }) => (
					<th key={label} {...rest}>{ label }</th>
				)) }
			</tr>
		</thead>
	);

	const Row = (item) => {
		const keys = Object.keys(item);

		return (
			<tr>
				{
					keys.map(key => <td key={key}>{ item[key] }</td>)
				}
			</tr>
		);
	};

	return (
		<div className={`table-component ${bordered ? 'bordered' : ''} ${darkheader ? 'dark-header' : ''}`}>
			<table id={_id}>
				<Header />

				<tbody>
					{ items.length && (
						items.map(item => (<Row key={item.id} {...item} />))
					)}
				</tbody>
			</table>
		</div>
	);
});

export default Table;