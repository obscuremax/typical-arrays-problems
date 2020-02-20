
exports.min = function min (array) {
    if (array == null || array == false || array == undefined || array.length == undefined) {
        return 0;
    }
   let min
    for(let i=0; i<array.length; i++) {
        if (i === 0) {
            min = array[i]
        } else if(array[i]<min){
            min = array[i]
        }
    }
    return min
}

exports.max = function max (array) {
    if (array == null || array == false || array == undefined || array.length == undefined) {
        return 0;
    }
    let max
    for(let i=0; i<array.length; i++) {
        if (i === 0) {
            max = array[i]
        } else if(array[i]>max){
            max = array[i]
        }
    }
    return max
}

exports.avg = function avg (array) {
    if (array == null || array == false || array == undefined || array.length == undefined) {
        return 0;
    }
    let num = array.length
    let newArr = array.reduce((accum, next) => accum+next)
    return newArr/num
}
