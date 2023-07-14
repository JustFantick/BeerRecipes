import React from 'react'

export default function RecipeCart(props) {
	return (
		<div className='recipe-cart' data-cartid={props.id}>
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
