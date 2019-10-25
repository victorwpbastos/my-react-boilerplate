import React, { useState } from 'react';

import Input from './components/Input';
import Button from './components/Button';
import Table from './components/Table';
import Cpf from './components/Cpf';
import Date from './components/Date';

const App = () => {
    const [cpf, setCpf] = useState('321.063.388-64');
    const [date, setDate] = useState('20/11/1984');

    const headers = [
        { key: 'cpf', label: 'CPF' },
        { key: 'nome', label: 'Nome' },
        { key: 'idade', label: 'Idade' },
    ];

    const data = [
        {
            id: 1, nome: 'Teste Teste', cpf: '999.999.999-99', idade: 30,
        },
        {
            id: 2, nome: 'Teste Teste', cpf: '999.999.999-99', idade: 30,
        },
        {
            id: 3, nome: 'Teste Teste', cpf: '999.999.999-99', idade: 30,
        },
        {
            id: 4, nome: 'Teste Teste', cpf: '999.999.999-99', idade: 30,
        },
        {
            id: 5, nome: 'Teste Teste', cpf: '999.999.999-99', idade: 30,
        },
    ];

    return (
        <>
            <p>{cpf} / {date}</p>
            <div className="container">
                <Cpf value={cpf} onChange={setCpf} />

                <Date value={date} onChange={setDate} />

                <p>
                    <Button className="mr-2">Click me</Button>
                    <Button className="mr-2" color="secondary">Click me</Button>
                    <Button className="mr-2" color="success">Click me</Button>
                    <Button className="mr-2" color="danger">Click me</Button>
                    <Button className="mr-2" color="info">Click me</Button>
                    <Button className="mr-2" color="warning">Click me</Button>
                    <Button className="mr-2" color="dark">Click me</Button>
                </p>
                <p>
                    <Button className="mr-2" outlined>Click me</Button>
                    <Button className="mr-2" outlined color="secondary">Click me</Button>
                    <Button className="mr-2" outlined color="success">Click me</Button>
                    <Button className="mr-2" outlined color="danger">Click me</Button>
                    <Button className="mr-2" outlined color="info">Click me</Button>
                    <Button className="mr-2" outlined color="warning">Click me</Button>
                    <Button className="mr-2" outlined color="dark">Click me</Button>
                </p>

                <Table headers={headers} data={data}>
                    { data.map((item) => (
                        <tr key={item.id}>
                            <td>CPF {item.cpf}</td>
                            <td>Nome {item.nome}</td>
                            <td>Idade {item.idade}</td>
                        </tr>
                    )) }
                </Table>
            </div>
        </>
    );
};

export default App;