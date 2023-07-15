import React from 'react';
import { useRecipesStore } from '../../store/store';

export default function RecipePage() {
	const recipeId = useRecipesStore((state) => state.recipeId);
	const recipe = useRecipesStore((state) => state.recipes[recipeId - 1]);

	return (
		<div className='recipe-page'>
			<div className="recipe-page__img">
				<img src={recipe ? recipe.image_url : '#'} alt={recipe ? `${recipe.name}_img` : 'Name not found'} />
			</div>

			<div className="recipe-page__info recipe-page-info">
				<div className="recipe-page-info__head">
					<h2>{recipe ? recipe.name : 'Name not found'}</h2>
					<h4>{recipe ? recipe.tagline : 'Tagline not found'}</h4>
					<p><span>First brewed:</span> {recipe ? recipe.first_brewed : 'date not found'}</p>

					<div className="back-btn"></div>
				</div>
				<div className="recipe-page-info__description">
					<div className="horizontal-line"></div>
					<p>{recipe ? recipe.description : 'Description not found'}</p>
					<div className="horizontal-line"></div>
				</div>

				<div className="recipe-page-info__specs">
					<div>
						<strong>Batch size:</strong> {recipe ? recipe.volume.value + ` ${recipe.volume.unit}` : 'value nor found'}
					</div>
					<div><strong>IBUs:</strong> {recipe ? recipe.ibu : 'value not found'}</div>
					<div><strong>OG:</strong>{recipe ? recipe.target_og : 'value not found'}</div>
					<div><strong>ABV:</strong>{recipe ? recipe.abv + '%' : 'value not found'}</div>
					<div><strong>FG:</strong>{recipe ? recipe.target_fg : 'value not found'}</div>

				</div>

				<div className="recipe-page-info__section">
					<h5>Malt</h5>
					{recipe ?
						recipe.ingredients.malt.map((obj, id) =>
							<p key={id}>
								{`${obj.amount.value} ${obj.amount.unit} of ${obj.name}`}
							</p>
						)
						: 'Malt info not found'
					}
				</div>

				<div className="recipe-page-info__section">
					<h5>HOPS SCHEDULE</h5>
					{recipe ?
						recipe.ingredients.hops.map((obj, id) =>
							<p key={id}>
								{`${obj.amount.value} ${obj.amount.unit} of ${obj.name} at the ${obj.add}`}
							</p>
						)
						: 'Hops info not found'
					}
				</div>

				<div className="recipe-page-info__section">
					<h5>Yeast</h5>
					<p>{recipe ? recipe.ingredients.yeast : 'No yeast info'}</p>
				</div>

				<div className="recipe-page-info__section">
					<h5>DIRECTIONS</h5>
					<p>
						{recipe ? `Fermentation: ${recipe.method.fermentation.temp.value} ${recipe.method.fermentation.temp.unit}.` : 'Fermentation info not found'}
					</p>
					<p>
						{recipe ? `Mash the grains at: ${recipe.method.mash_temp[0].temp.value} ${recipe.method.mash_temp[0].temp.unit} for ${recipe.method.mash_temp[0].temp.duration} minutes.` : 'Mashing info not found'}
					</p>
					{
						recipe ?
							recipe.method.twist ?
								<p><strong>Twist:</strong> {recipe.method.twist}</p>
								: '' : ''
					}
				</div>

				<div className="recipe-page-info__section">
					<h5>BREWERS NOTES</h5>
					<p>{recipe ? recipe.brewers_tips : 'Notes not found'}</p>
				</div>
			</div>


		</div>
	)
}
