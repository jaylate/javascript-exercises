const repeatString = function(str, num) {
    if (num < 0) return 'ERROR';
    let out = '';
    for (let i = 0; i < num; i++) {
	out += str;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;
