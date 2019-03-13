// Task 1
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi);
    var lastIndex = str.length - 1;
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }
    return true;
}

isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false

// Task 2
var isAnagram = function(original, test) {
    return original.trim() === test.trim() ? false : sort(original) === sort(test);
  }
  
  isAnagram('кот', 'отк'); // true
  isAnagram('кот', 'атк'); // false
  isAnagram('кот', 'отко'); // false

// Task 3
function divideArr(arr, size){
    var index = 0;
    var arrLength = arr.length;
    var emptyArray = [];

    for (index = 0; index < arrLength; index += size) {
        slices = arr.slice(index, index + size);
        emptyArray.push(slices);
    }

    return emptyArray;
}
divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5], 3);

// Task 4
function vowels(words) {
    
    var count = words.match(/[аоиеёэыуюя]/g).length;

    return count ? count : alert('Нет совпадений');
}

vowels('привет');
