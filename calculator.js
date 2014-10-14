function flatMarkup(basePrice) {
	var basePrice = basePrice.replace("$","")
	var flatMarkup = basePrice * 1.05
	return flatMarkup
}

function wageMarkup(numOfWorkers) {
	var numOfWorkers = parseFloat(numOfWorkers)
	if (numOfWorkers % 1 != 0) {
		return "Error"
	}
	else {
		var wageMarkup = 0.012 * numOfWorkers
		return wageMarkup.toFixed(3)
	}	
}

function materialMarkup(material) {
	var materials = {"pharmaceuticals":["pharmaceuticals", "drugs", "medicine", "medication"], "food":["food"], "electronics":["electronics", "computer", "laptop"]}
	var markups = {"pharmaceuticals": 0.075, "food": 0.13, "electronics": 0.02, "other": 0}
	for (var key in materials) {
		if (materials[key].indexOf(material) > -1) {
			var materialName = key
			var found = 1
		}
	}
	if (found != 1) {
		materialName = "other"
	}
	var additionalMarkup = markups[materialName]
	return additionalMarkup
}

function markupCalculator(basePrice, numOfWorkers, material) {
	var baseMarkup = flatMarkup(basePrice)
	var totalMarkup = wageMarkup(numOfWorkers) + materialMarkup(material.toLowerCase())
	var totalPrice = baseMarkup * (totalMarkup + 1)
	if (isNaN(totalPrice)) { 
		return "Error"
	}
	else {
		return "$" + totalPrice.toFixed(2)
	}
}