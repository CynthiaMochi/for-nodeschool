function repeat(operation, num) {
    if(num > 16) return;

    return repeat(operation, ++num);
}

module.exports = repeat;