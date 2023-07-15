import React from 'react'
import { useRef } from 'react';
import { useRecipesStore } from '../../store/store';

export default function RecipeCart(props) {
	const cartBlock = useRef(null);
	const setRecipeId = useRecipesStore(state => state.setRecipeId);
	const setRenderRecipeList = useRecipesStore(state => state.setRenderRecipeList);
	const markRecipe = useRecipesStore(state => state.markRecipe);

	function onClickHandler() {
		setRecipeId(props.id);
		setRenderRecipeList(false);
	}

	function rightClickHandler(e) {
		e.preventDefault();
		cartBlock.current.classList.toggle('chosen');
		markRecipe(props.id);
	}

	return (
		<div className='recipe-cart' ref={cartBlock}
			data-cartid={props.id}
			onContextMenu={e => rightClickHandler(e)}
			onClick={onClickHandler}
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
