class VigenereCipheringMachine {
    constructor(flag) {
        this.flag = flag;
        this.arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.obj_Num = {};

        this.arr_EN.forEach((element, index) => {
            this.obj_Num[element] = index;
        });
    }
    encrypt(str, key) {
        if (!(str && key)) throw new Error();
        let newStr = this.getStrPart(str);

        let strArr = newStr.join('').split('');
        let keyArr = new Array(strArr.length).fill(key).join('').split('');
        keyArr.length = strArr.length;

        let strNum_Arr = strArr.map((element, index, arr) => {
            return element.toUpperCase() in this.obj_Num ? this.obj_Num[element.toUpperCase()] : " ";
        });
        let keyNum_Arr = keyArr.map((element, index, arr) => {
            return element.toUpperCase() in this.obj_Num ? this.obj_Num[element.toUpperCase()] : " ";
        });

        let result = [];

        strNum_Arr.forEach((element, index, arr) => {
            if (element === " ") {
                result.push(element);
                keyNum_Arr.splice(index, 0, null);
            } else {
                let number = element + keyNum_Arr[index] >= this.arr_EN.length ? (element + keyNum_Arr[index]) % this.arr_EN.length : element + keyNum_Arr[index];
                result.push(this.arr_EN[number]);
            }
        });

        return String(this.flag) == "false" ? (str.replace(newStr, result.join(''))).split('').reverse().join('') : str.replace(newStr, result.join(''));
    }

    decrypt(str, key) {
        if (!(str && key)) throw new Error();
        let newStr = this.getStrPart(str);

        let strArr = newStr.join('').split('');
        let keyArr = new Array(strArr.length).fill(key).join('').split('');
        keyArr.length = strArr.length;

        let strNum_Arr = strArr.map((element, index, arr) => {
            return element.toUpperCase() in this.obj_Num ? this.obj_Num[element.toUpperCase()] : " ";
        });
        let keyNum_Arr = keyArr.map((element, index, arr) => {
            return element.toUpperCase() in this.obj_Num ? this.obj_Num[element.toUpperCase()] : " ";
        });

        let result = [];

        strNum_Arr.forEach((element, index, arr) => {
            if (element === " ") {
                result.push(element);
                keyNum_Arr.splice(index, 0, null);
            } else {
                let number = element - keyNum_Arr[index] <= 0 ? (element + this.arr_EN.length - keyNum_Arr[index]) % this.arr_EN.length : element - keyNum_Arr[index];
                result.push(this.arr_EN[number]);
            }
        });

        return String(this.flag) == "false" ? (str.replace(newStr, result.join(''))).split('').reverse().join('') : str.replace(newStr, result.join(''));
    }

    getStrPart(str) {
        return str.match(new RegExp(/[A-Za-z\s]*/))
    }
}

module.exports = VigenereCipheringMachine;