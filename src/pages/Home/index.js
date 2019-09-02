import React, { useState } from 'react';
import { FormCreator } from '../../components/Custom';

const HomePage = () => {
	const [state, setState] = useState({
		nome: '',
		cpf: '',
		idade: 34,
		sexo: ''
	});

	const schema = () => {
		return [
			{
				label: 'Nome',
				cols: 6,
				value: state.nome,
				mask: 'aaaa-AAAA-####',
				onChange: value => setState({...state, nome: value })
			},
			{
				label: 'CPF',
				cols: 2,
				value: state.cpf,
				mask: '###.###.###-##',
				onChange: value => setState({...state, cpf: value })
			},
			{
				label: 'Idade',
				cols: 2,
				value: state.idade,
				items: [10, 20, 30, 34, 40],
				onChange: value => setState({...state, idade: value })
			},
			{
				label: 'Sexo',
				cols: 2,
				value: state.sexo,
				compareBy: 'value',
				readOnly: true,
				items: [
					{ text: '-- selecione --', value: '' },
					{ id: 2, text: 'Masculino', value: 'masculino' },
					{ id: 2, text: 'Feminino', value: 'feminino' }
				],
				onChange: value => setState({...state, sexo: value })
			}
		];
	};

	return (
		<>
			<pre>{ JSON.stringify(state) }</pre>
			<div className="flex">
				<FormCreator schema={schema()} />
			</div>
		</>
	);
};

export default HomePage;