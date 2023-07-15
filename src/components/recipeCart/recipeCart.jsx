import React from 'react'
import { useRef } from 'react';

export default function RecipeCart(props) {
	const cartBlock = useRef(null);

	function onClickHandler(e) {
		console.log('LMB click');
	}

	function rightClickHandler(e) {
		e.preventDefault();
		cartBlock.current.classList.toggle('chosen');
	}

	return (
		<div className='recipe-cart' ref={cartBlock}
			data-cartid={props.id}
			onContextMenu={e => rightClickHandler(e)}
			onClick={(e) => onClickHandler(e)}
		>
			<div className="recipe-cart__img">
				<img src={props.imgUrl} alt={props.imgAlt} />
			</div>
			<div className="recipe-cart__info cart-info">
				<div className="cart-info__title">{props.cartName}</div>
				<div className="cart-info__description">{props.description}</div>
				<div className="cart-info__date">
					<span>First brewed:</span> {props.date}
				</div>

			</div>

		</div>
	)
}
