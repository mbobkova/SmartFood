export function addProduct(product) {
	return {
		type: 'add',
	  payload: product,
	}  
}

export function deleteProduct(product) {
	return {
		type: 'delete',
	  payload: product,
	}  
}

export function likeProduct(product) {
	return {
		type: 'like',
	  payload: product,
	}  
}

export function unlikeProduct(product) {
	return {
		type: 'unlike',
	  payload: product,
	}  
}

export function resetChoise() {
	return {
		type: 'reset'
	}
}

export function saveRecipes(recipes) {
	return {
		type: 'saveRecipes',
		payload: recipes,
	}
}

export function saveAllRecipes(recipes) {
	return {
		type: 'saveAllRecipes',
		payload: recipes,
	}
}

export function likeRecipe(recipe) {
	return {
		type: 'likeRecipe',
		payload: recipe,
	}
}

export function unlikeRecipe(recipe) {
	return {
		type: 'unlikeRecipe',
		payload: recipe,
	}
}

export function authorize() {
	return {
		type: 'authorize',
		payload: true,
	}
}