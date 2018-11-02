const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
        let tempStart = end;
        end = start;
        start = tempStart;
    }
    let isInRange = number >= start && number < end;
    return isInRange;
  },
  words(string) {
    let words = string.split(' ');
    return words;
  },
  pad(string, length) {
    if (length <= string.length){
      return string;
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPadding = length - string.length - startPaddingLength;
    let paddedString = ' ';
    return paddedString.repeat(startPaddingLength) + string + paddedString.repeat(endPadding);
  },
  has(object, key){
    let hasValue = object.hasOwnProperty(key);
    return hasValue;
  },
  invert(object){
    const invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicate){
    for (key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue === true){
        return key;
        break;
      }
      else {
        return undefined;
      }
    }
  },
  drop(array, n){
    if (n === undefined){
      n = 1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
  },
  dropWhile(array, predicate){
    let droppedNumber = array.findIndex((element, index) => {
      return !predicate(element, index);
    });
    let droppedArray = this.drop(array,droppedNumber);
    return droppedArray;
  },
  chunk(array, size){
    if (size === undefined){
      size = 1;
    }
    let arrayChunks = [];
    for (i = 0; i < array.length; i+=size){
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};




// Do not write or modify code below this line.
module.exports = _;
