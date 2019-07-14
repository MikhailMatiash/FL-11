function reverseNumber (a){
    let numAtoStr = Math.abs(a).toString();
    let res = '';
    for (let i = numAtoStr.length - 1; i >= 0; i--){
        res += numAtoStr[i];
    }
    return result * Math.sign(a);
}
