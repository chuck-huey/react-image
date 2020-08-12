module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	],
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {}
};
