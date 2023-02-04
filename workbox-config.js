module.exports = {
	globDirectory: 'Todo App/',
	globPatterns: [
		'**/*.{js,css,html}'
	],
	swDest: 'Todo App/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};