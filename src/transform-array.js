module.exports = function transform(arr) {
    if(!Array.isArray(arr)){
        throw Error();
    }
    let arrResult = [];
    for(let i = 0 ;i < arr.length;i++)
    {   
        switch(arr[i]) {
            case '--discard-next': i++;
            break;
            case '--discard-prev': arrResult.pop();
            break
            case '--double-next': if (i + 1 <= arr.length - 1) {
                arrResult.push(arr[i + 1]);
              };
            break
            case '--double-prev': if (i - 1 >= 0) {
                arrResult.push(arr[i - 1]);
              };
            break;
            default: arrResult.push(arr[i]);
        }       
    }
    return arrResult;
};
