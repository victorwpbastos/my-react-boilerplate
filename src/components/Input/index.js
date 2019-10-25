import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Masker from './masker';
import styles from './Input.module.scss';

const Input = ({
    label, id, value, mask, className, onChange, ...rest
}) => {
    const inputId = id || `input_${performance.now().toString().replace(/\./g, '')}`;
    const classes = ['form-control', ...className.split(' ')].join(' ');

    const inputRef = useRef();

    useEffect(() => {
        const v = inputRef.current.value;

        if (mask && (v !== undefined && v !== null)) {
            const masked = Masker.maskitWithValue(v, mask);

            onChange(masked);
        }
    }, [mask, onChange]);

    function handleChange(e) {
        if (mask) {
            const maskedValue = Masker.maskit(e, mask);

            return onChange(maskedValue, e);
        }

        return onChange(e.target.value, e);
    }

    return (
        <div className={['form-group', styles.input].join(' ')}>
            <label htmlFor={inputId}>{label}</label>
            <input type="text" value={value} className={classes} ref={inputRef} id={inputId} onChange={handleChange} {...rest} />
        </div>
    );
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    className: '',
    onChange: () => {},
};

export default Input;