const MASK_MAP = {
	'#': /\d/,
	'A': /[A-Z]/,
	'a': /[a-z]/
};

function allowChange(e, mask) {
	const char = e.nativeEvent.data;
	const charIndex = e.target.value.length - 1;
	const maskChar = mask[charIndex];

	if (char === null) {
		return true;
	}

	if (maskChar && MASK_MAP[maskChar]) {
		return MASK_MAP[maskChar].test(char);
	}

	return false;
}

function mask(e, mask) {
	let masked = e.target.value.split('');
	const specialChars = mask.split('').map((char, index) => !MASK_MAP[char] && { char, index }).filter(v => v);

	if (e.nativeEvent.data) {
		specialChars.forEach(({ char, index }) => {
			if (!masked[index] && masked.length === index) {
				masked.splice(index, 0, char);
			}
		});
	}

	if (!allowChange(e, mask)) {
		masked.pop();
	}

	return masked.join('');
}

export default {
	mask
};