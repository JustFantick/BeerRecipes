import React from 'react'
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function DeleteButton(props) {
	const buttonBlock = useRef(null);
	return (
		<CSSTransition
			in={props.in} timeout={300}
			classNames='delete-btn'
			mountOnEnter unmountOnExit
		>
			<div className='delete-btn' onClick={props.onClick}></div>
		</CSSTransition>
	)
}
