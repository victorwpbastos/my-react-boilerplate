import React, { forwardRef, useState } from 'react';
import { MdUnfoldMore, MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const Header = ({ text, clickedHeader = {}, onClick = () => {}, ...rest }) => {
	let direction = clickedHeader.text === text ? clickedHeader.direction : null;

	function handleClick() {
		direction = direction ? (direction === 'asc' ? 'desc' : 'asc') : 'asc';

		onClick({ text, direction, ...rest });
	}

	return (
		<th {...rest} onClick={handleClick}>
			<div className="flex align-center">
				<span className="mr-5">{ text }</span>
				{ !direction && <MdUnfoldMore size={18} /> }
				{ direction === 'asc' && <MdKeyboardArrowUp size={18} /> }
				{ direction === 'desc' && <MdKeyboardArrowDown size={18} /> }
			</div>
		</th>
	);
};

const Row = ({keys, item}) => (
	<tr>
		{ keys.map(key => <td key={key}>{ item[key] }</td>) }
	</tr>
);

const Table = forwardRef(({ id, headers = [], data = [], onHeaderClick = () => {}, renderRow = () => {}, renderHeader = () => {}, renderFooter = () => {}, bordered = false, darkheader = false, children, ...rest }, ref) => {
	const _id = id || `table_${performance.now().toString().replace('.', '')}`;
	const [clickedHeader, setClickedHeader] = useState({ text: null, value: null, direction: null });

	function handleClick(data) {
		setClickedHeader(data);
		onHeaderClick(data);
	}

	return (
		<div className={`table-component ${bordered ? 'bordered' : ''} ${darkheader ? 'dark-header' : ''}`}>
			<table id={_id} {...rest}>
				<thead>
					{ renderHeader() || (
						<tr>
							{ headers.map(({ text, ...rest }) => (
								<Header clickedHeader={clickedHeader} onClick={handleClick} key={text} text={text} width={`${100 / headers.length}%`} {...rest} />
							)) }
						</tr>
					)}
				</thead>

				<tbody>
					{ data.length > 0 && (
						data.map(item => (renderRow(item) || <Row key={item.id} keys={headers.map(h => h.value)} item={item} />))
					)}
				</tbody>

				<tfoot>
					{ renderFooter() }
				</tfoot>
			</table>
		</div>
	);
});

export default Table;