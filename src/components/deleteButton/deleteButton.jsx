import React from 'react'
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function DeleteButton(props) {
	return (
		<CSSTransition
			in={props.in} timeout={300}
			classNames='delete-btn'
			mountOnEnter unmountOnExit
		>
			<button className='delete-btn' onClick={props.onClick}></button>
		</CSSTransition>
	)
}
