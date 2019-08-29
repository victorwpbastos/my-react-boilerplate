import React, { forwardRef } from 'react';

const Button = forwardRef(({ id, type = 'button', large = false, small = false, block = false, color = 'primary', onClick = () => {}, children, ...rest }, ref) => {
	const _id = id || `button_${performance.now().toString().replace('.', '')}`;
	let customColor;

	if (!['primary', 'warning', 'danger', 'success'].includes(color)) {
		customColor = color;
	}

	function handleClick(e) {
		onClick(e.target);
	}

	return (
		<div className={`button-component ${!block ? 'inline' : ''}`}>
			<button ref={ref} type={type} id={_id} style={{background: customColor || '' }} className={`${large ? 'large' : ''} ${small ? 'small' : ''} ${block ? 'block' : ''} ${!customColor ? color : ''}`} {...rest} onClick={handleClick}>
				{ children }
			</button>
		</div>
	);
});

export default Button;