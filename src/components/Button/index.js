import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
    type, color, outlined, className, onClick, children, ...rest
}) => {
    const classes = ['btn', outlined ? `btn-outline-${color}` : `btn-${color}`, ...className.split(' '), styles.button].join(' ');

    return (
        // eslint-disable-next-line react/button-has-type
        <button type={type} className={classes} onClick={onClick} {...rest}>{children}</button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'dark']),
    outlined: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'button',
    color: 'primary',
    outlined: false,
    className: '',
    onClick: () => {},
};

export default Button;