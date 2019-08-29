import React, { useState, useEffect } from 'react';
import { Table } from '../../components/Custom';

const HomePage = () => {
	// const items = [
	// 	{ id: 1, nome: 'Victor', idade: 34, sexo: 'Masculino' },
	// 	{ id: 2, nome: 'Milena', idade: 29, sexo: 'Feminino' },
	// 	{ id: 3, nome: 'Rebeca', idade: 8, sexo: 'Feminino' },
	// 	{ id: 4, nome: 'Débora', idade: 6, sexo: 'Feminino' },
	// 	{ id: 5, nome: 'Giulia', idade: 3, sexo: 'Feminino' }
	// ];
	const [items, setItems] = useState([]);

	function handleSort({ text, direction, ...rest }) {
		console.log({ text, direction, ...rest });
	}

	useEffect(() => {
		(async () => {
			const url = 'https://api.sorocaba.sp.gov.br/pub-consulta/api/publicacao?page=1&itens_per_page=10&sort_fields=dataAbertura%3Adesc';
			const response = await fetch(url);
			const { itemList } = await response.json();

			setItems(itemList);
		})();
	}, []);

	return (
		<div>
			<Table
				headers={[
					{ text: 'CPL', value: 'codigoProcesso', width: '1px' },
					{ text: 'EDITAL', value: 'numeroEdital', width: '1px' },
					{ text: 'MODALIDADE', value: 'modalidade', width: '1px' },
					{ text: 'OBJETO', value: 'descricaoObjeto', width: 'auto' }
				]}
				data={items}
				onHeaderClick={handleSort}
				renderHeader={() => (
					<tr>
						<th colSpan="4">HAHA</th>
					</tr>
				)}
				renderRow={item => (
					<tr key={item.id}>
						<td colSpan="4">
							{ item.descricaoObjeto }
						</td>
						{/* <td>{ item.codigoProcesso }</td>
						<td>{ item.numeroEdital }</td>
						<td>{ item.descricaoObjeto }</td> */}
					</tr>
				)}
				renderFooter={() => (
					<tr>
						<td colSpan="4" className="pa-15">
							<strong>HAHAHA</strong>

						</td>
					</tr>
				)}
			/>
		</div>
	);
};

export default HomePage;