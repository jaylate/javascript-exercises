const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0)
	return "ERROR";
    let out = 0;
    if (start < end) {
	for (let i = start; i <= end; i++) out += i;
    } else {
	for (let i = end; i <= start; i++) out += i;
	console.log(out);
    }
    return out;
};

// Do not edit below this line
module.exports = sumAll;
