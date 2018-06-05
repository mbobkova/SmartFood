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

export function likeResipe(recipe) {
	return {
		type: 'likeResipe',
		payload: recipe,
	}
}

export function unlikeResipe(recipe) {
	return {
		type: 'unlikeResipe',
		payload: recipe,
	}
}