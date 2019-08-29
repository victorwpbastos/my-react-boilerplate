module.exports = {
	root: true,
	extends: 'react-app',
	rules: {
		'prettier/prettier': 'off',
		'jest/jest': 'off',
		indent: ['error', 'tab'],
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'comma-dangle': ['error', 'never'],
		'linebreak-style': ['error', 'unix'],
		'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
		'no-trailing-spaces': 'error',
		'eol-last': ['error', 'never']
	}
};
