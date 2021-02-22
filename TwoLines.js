function classPhotos(redShirtHeights, blueShirtHeights) {
	let allSmaller = true
	let allTaller = true
	const sortR = redShirtHeights.sort((a,b) => a<b)
	const sortB = blueShirtHeights.sort((a,b) => a<b)
	console.log(sortR, sortB)
	for(let i = 0; i< redShirtHeights.length; i++) {
		const r = sortR[i]
		const b = sortB[i]
		allSmaller = allSmaller && r < b
		allTaller = allTaller && r > b
		if(!allSmaller && !allTaller) {
			return false;
		}
	}
	return true;
}
const r = [ 5, 8, 1, 3, 4 ] 
const b = [ 6, 9, 2, 4, 5 ]
console.log(classPhotos(r,b))

