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
	console.log(recipes)
	return {
		type: 'saveRecipes',
		payload: recipes,
	}
}