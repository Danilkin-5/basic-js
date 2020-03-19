module.exports = function repeater(str, options) {
    if(!('separator' in options)) options.separator = '+';
    if('addition' in options && !('additionSeparator' in options)) options.additionSeparator = '|';
    if(!('addition' in options)) {
        options.addition = '';
        options.additionSeparator = "";
    }
    if(!options.additionRepeatTimes || !('additionRepeatTimes' in options)) options.additionRepeatTimes = 1;
    if(!options.repeatTimes || !('repeatTimes' in options)) options.repeatTimes = 1;
    let result = '';
    for(let i = 0; i < options.repeatTimes; i++){
        result += str;
        for(let j = 0; j < options.additionRepeatTimes; j++) {
            j == options.additionRepeatTimes - 1 ? result += options.addition : result += options.addition + options.additionSeparator;
        }
        i == options.repeatTimes - 1 ? result : result += options.separator;
    }
    return result;
};
  