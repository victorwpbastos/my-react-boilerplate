import React from 'react';
import Input from '../Input';

const Date = ({ label = 'Data', ...rest }) => (
    <Input label={label} mask="##/##/####" placeholder="dd/mm/aaaa" {...rest} />
);

export default Date;