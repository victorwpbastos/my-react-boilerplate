const MASK_MAP = {
    '#': /\d/,
    A: /[A-Z]/,
    a: /[a-z]/,
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

function maskit(e, mask) {
    const masked = e.target.value.split('');
    const specialChars = mask.split('').map((char, index) => !MASK_MAP[char] && { char, index }).filter((v) => v);

    if (!allowChange(e, mask)) {
        masked.pop();
    }

    if (e.nativeEvent.data) {
        specialChars.forEach(({ char, index }) => {
            if (!masked[index] && masked.length === index) {
                masked.splice(index, 0, char);
            }
        });
    }

    return masked.join('');
}

function maskitWithValue(value, mask) {
    const masked = value.split('');
    const specialChars = mask.split('').map((char, index) => !MASK_MAP[char] && { char, index }).filter((v) => v);
    const reChars = mask.split('').map((char) => {
        if (MASK_MAP[char]) {
            return MASK_MAP[char].toString().replace(/\//g, '');
        }
        return char;
    }).join('');
    const re = new RegExp(reChars);

    specialChars.forEach(({ char, index }) => {
        if (masked[index] !== char) {
            masked.splice(index, 0, char);
        }
    });

    if (re.test(masked.join(''))) {
        return masked.join('');
    }

    return '';
}

export default {
    maskit,
    maskitWithValue,
};