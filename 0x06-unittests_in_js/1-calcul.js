const calculateNumber = (type, a, b) => {
    let w, x;
    w = Math.round(a);
    x = Math.round(b);
    if (type === 'SUM'){
        return w + x
    }
    if (type === 'SUBTRACT'){
        return w - x
    }
    if (type === 'DIVIDE'){
       return x !== 0 ? w / x : 'Error'
    }
    return 0;
}
module.exports = calculateNumber;