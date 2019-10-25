import React from 'react';
import PropTypes from 'prop-types';

import styles from './Table.module.scss';

const Table = ({
    headers, data, className, darkHeader, color, children, ...rest
}) => {
    const classes = ['table table-hover table-bordered', ...className.split(' '), styles.table];

    // if (darkHeader) {
    //     classes = classes.filter((c) => c !== 'table-bordered');
    // }

    return (
        <table className={classes.join(' ')} {...rest} style={darkHeader ? { borderColor: `var(--${color})` } : null}>
            <thead style={darkHeader ? { background: `var(--${color})`, color: '#ffffff' } : null}>
                <tr>
                    { headers.map((item) => (
                        <th key={item.label}>{item.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {children || data.map((row) => (
                    <tr key={row.id}>
                        { headers.map(({ key }) => (
                            <td key={key}>{row[key]}</td>
                        )) }
                    </tr>
                )) }
            </tbody>
        </table>
    );
};

Table.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    headers: PropTypes.array,
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.array,
    className: PropTypes.string,
    darkHeader: PropTypes.bool,
    color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'dark']),
};

Table.defaultProps = {
    headers: [],
    data: [],
    className: '',
    darkHeader: true,
    color: 'dark',
};

export default Table;