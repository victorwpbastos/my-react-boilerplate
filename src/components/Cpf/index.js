import React from 'react';
import Input from '../Input';

const Cpf = ({ label = 'CPF', ...rest }) => (
    <Input label={label} mask="###.###.###-##" placeholder="___.___.___-__" {...rest} />
);

export default Cpf;