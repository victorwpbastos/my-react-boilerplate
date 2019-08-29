import React, { useState, useRef } from 'react';
import { Form, Input, Select, Textarea, Checkbox, Radio } from '../../components/Custom/Form';
import { Button, Table } from '../../components/Custom';

const HomePage = () => {
	const [state, setState] = useState({
		nome: 'Victor Bastos',
		// person: { id: 2, name: 'Chunda Lover 2' },
		// people: [
		// 	{ id: 1, name: 'Chunda 1' }
		// 	// { id: 2, name: 'Chunda 2' },
		// 	// { id: 3, name: 'Chunda 3' }
		// ],
		// fruta: 'Banana',
		cores: ['azul', 'vermelho']
		// admin: true,
		// bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt natus modi blanditiis minima itaque ducimus exercitationem, consequuntur illum, ad unde deleniti expedita incidunt deserunt veritatis aliquam atque pariatur nam sequi.'
	});
	const [valid, setValid] = useState(true);
	let form = useRef(null);

	// const options = [
	// 	{ id: 1, name: 'Chunda Lover' },
	// 	{ id: 2, name: 'Chunda Lover 2' },
	// 	{ id: 3, name: 'Chunda Lover 3' }
	// ];

	function required(val) {
		if (!val || (Array.isArray(val) && !val.toString())) {
			return 'Preenchimento obrigatório';
		}
	}

	function minLength(length) {
		return function (val) {
			if (val.toString().length < length) {
				return  `Deve ter no mínimo ${length} caracter(es)`;
			}
		};
	}

	function notRed(val) {
		if (val.includes('vermelho')) {
			return 'Não pode conter a cor vermelha';
		}
	}

	// let form;

	function handleSubmit(args) {
		console.log(args);
		// console.log(form);
	}

	const items = [
		{ id: 1, nome: 'Victor', idade: 34, sexo: 'Masculino' },
		{ id: 2, nome: 'Milena', idade: 29, sexo: 'Feminino' },
		{ id: 3, nome: 'Rebeca', idade: 8, sexo: 'Feminino' },
		{ id: 4, nome: 'Débora', idade: 6, sexo: 'Feminino' },
		{ id: 5, nome: 'Giulia', idade: 3, sexo: 'Feminino' }
	];

	return (
		<div>
			<Form ref={form} valid={setValid} onSubmit={handleSubmit}>
				<Table darkheader headers={[{ label: 'ID' }, { label: 'Nome' }, { label: 'Idade' }, { label: 'Sexo' }]} items={items} renderRow={item => (
					<tr key={item.id}>
						<td>{ item.nome }</td>
						<td>{ item.idade }</td>
						<td>{ item.sexo }</td>
					</tr>
				)} />

				<div className="row">
					<div className="col-6">
						<Input
							label="Nome"
							value={state.nome}
							rules={[required, minLength(5)]}
							onChange={value => setState({ ...state, nome: value })}
						/>
					</div>
					<div className="col-6">
						<Select label="Cores" multiple value={state.cores} rules={[required, notRed]} onChange={value => setState({ ...state, cores: value })}>
							<option value="">-- selecione --</option>
							<option value="azul">Azul</option>
							<option value="amarelo">Amarelo</option>
							<option value="vermelho">Vermelho</option>
						</Select>
					</div>
				</div>

				{/* <button type="submit" disabled={!valid}>Enviar</button> */}
				<Button small color="success">Small</Button>
				<Button color="warning">Normal</Button>
				<Button large color="danger">Large</Button>
				<Button block>Block</Button>
				<Button block large>Block & Large</Button>
				<Button block small>Block & Small</Button>

				{/* <Checkbox data={state.cores} label="Vermelho" value="vermelho" onChange={value => setState({ ...state, cores: value })} />
			<Checkbox data={state.cores} label="Azul" value="azul" onChange={value => setState({ ...state, cores: value })} />
			<Checkbox data={state.cores} label="Verde" value="verde" onChange={value => setState({ ...state, cores: value })} />
			<Checkbox data={state.cores} label="Amarelo" value="amarelo" onChange={value => setState({ ...state, cores: value })} />

			<Checkbox data={state.admin} label="Admin" value={true} onChange={value => setState({ ...state, admin: value })} />

			<Radio data={state.admin} label="Is Admin" value={true} onChange={value => setState({ ...state, admin: value })} />
			<Radio data={state.admin} label="Is Not Admin" value={false} onChange={value => setState({ ...state, admin: value })} />

			<Textarea value={state.bio} maxLength="20" rows={5} onChange={value => setState({ ...state, bio: value })} /> */}

				{/* <Checkbox label="Azul" /> */}
				{/* <Checkbox label="Verde" /> */}

				{/* <Input label="Nome" id="chunda" placeholder="Digite seu nome" value={state.nome} onChange={value => setState({ ...state, nome: value })} /> */}

				{/* <Select
				label="Person"
				options={options}
				value={state.person}
				idKey="id"
				textKey="name"
				onChange={value => setState({ ...state, person: value })}
			/>

			<Select
				label="Fruta"
				options={['Maçã', 'Laranja', 'Banana']}
				value={state.fruta}
				onChange={value => setState({ ...state, fruta: value })}
			/> */}

				{/* <Select label="Fruta" value={state.fruta} onChange={value => setState({ ...state, fruta: value })}>
				<option value="">-- selecione --</option>
				<option value="Maçã">Maçã</option>
				<option value="Laranja">Laranja</option>
				<option value="Banana">Banana</option>
			</Select>

			<Select label="Person" value={state.person} compareBy="id" onChange={value => setState({ ...state, person: value })}>
				{options.map(opt => (
					<option key={opt.id} value={opt}>{opt.name}</option>
				))}
			</Select>

			<Select label="People" value={state.people} multiple compareBy="id" onChange={value => setState({ ...state, people: value })}>
				{options.map(opt => (
					<option key={opt.id} value={opt}>{opt.name}</option>
				))}
			</Select>

			<Select label="Cores" multiple value={state.cores} onChange={values => setState({ ...state, cores: values })}>
				<option value="">-- selecione --</option>
				<option value="Vermelho">Vermelho</option>
				<option value="Azul">Azul</option>
				<option value="Verde">Verde</option>
				<option value="Amarelo">Amarelo</option>
			</Select> */}

				{/* <Select label="Fruta" value={state.fruta} onChange={value => setState({ ...state, fruta: value })}>
				<option value="">-- selecione --</option>
				<option value="1">Maçã</option>
				<option value="2">Laranja</option>
				<option value="3">Banana</option>
			</Select>

			<Select label="Cores" multiple value={state.cores} onChange={values => setState({ ...state, cores: values })}>
				<option value="">-- selecione --</option>
				<option value="1">Vermelho</option>
				<option value="2">Azul</option>
				<option value="3">Verde</option>
				<option value="4">Amarelo</option>
			</Select> */}
			</Form>
		</div>
	);
};

export default HomePage;