/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (!queen || !king) return false;

  if (queen.x === king.x || queen.y === king.y) return true;

  let dx = queen.x - king.x;
  if (dx < 0) dx = -dx;
  let dy = queen.y - king.y;
  if (dy < 0) dy = -dy;
  return dx === dy;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;

  if (a + b <= c || a + c <= b || b + c <= a) return false;

  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const units = num % 10;
  const tens = Math.floor(num / 10);

  let res = '';

  if (tens === 3) res += 'XXX';
  else if (tens === 2) res += 'XX';
  else if (tens === 1) res += 'X';

  if (units === 0);
  if (units === 1) {
    res += 'I';
  } else if (units === 2) {
    res += 'II';
  } else if (units === 3) {
    res += 'III';
  } else if (units === 4) {
    res += 'IV';
  } else if (units === 5) {
    res += 'V';
  } else if (units === 6) {
    res += 'VI';
  } else if (units === 7) {
    res += 'VII';
  } else if (units === 8) {
    res += 'VIII';
  } else if (units === 9) {
    res += 'IX';
  }

  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  function digitWord(ch) {
    switch (ch) {
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      default:
        return '';
    }
  }

  let out = '';
  let first = true;

  for (let i = 0; i < numberStr.length; i += 1) {
    const ch = numberStr[i];
    let word = '';

    switch (ch) {
      case '-':
        word = 'minus';
        break;
      case '.':
      case ',':
        word = 'point';
        break;
      default:
        word = digitWord(ch);
        break;
    }

    if (word !== '') {
      if (!first) out += ' ';
      out += word;
      first = false;
    }
  }

  return out;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  if (str === undefined || str === null) return false;
  const n = str.length;
  for (let i = 0; i < Math.floor(n / 2); i += 1) {
    if (str[i] !== str[n - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  if (str === undefined || str === null) return -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let d = digit;
  if (d < 0) d = -d;
  d = Math.floor(d) % 10;
  let n = num;
  if (n === 0 && d === 0) return true;
  if (n < 0) n = -n;
  n = Math.floor(n);
  while (n > 0) {
    const dig = n % 10;
    if (dig === d) return true;
    n = Math.floor(n / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (!arr || arr.length === 0) return -1;
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  let left = 0;
  for (let j = 0; j < arr.length; j += 1) {
    const right = total - left - arr[j];
    if (left === right) return j;
    left += arr[j];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  // Crear matriz vacía size x size
  const matrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  let value = 1;

  while (top <= bottom && left <= right) {
    // 1. Recorrer izquierda → derecha
    for (let col = left; col <= right; col += 1) {
      matrix[top][col] = value;
      value += 1;
    }
    top += 1;

    // 2. Recorrer arriba → abajo
    for (let row = top; row <= bottom; row += 1) {
      matrix[row][right] = value;
      value += 1;
    }
    right -= 1;

    if (top <= bottom) {
      // 3. Recorrer derecha → izquierda
      for (let col = right; col >= left; col -= 1) {
        matrix[bottom][col] = value;
        value += 1;
      }
      bottom -= 1;
    }

    if (left <= right) {
      // 4. Recorrer abajo → arriba
      for (let row = bottom; row >= top; row -= 1) {
        matrix[row][left] = value;
        value += 1;
      }
      left += 1;
    }
  }

  return matrix;
}

function rotateMatrix(matrix) {
  const n = matrix.length;
  if (n === 0) return matrix;

  const out = new Array(n);
  for (let i = 0; i < n; i += 1) {
    out[i] = new Array(n);
  }

  for (let r = 0; r < n; r += 1) {
    for (let c = 0; c < n; c += 1) {
      out[c][n - 1 - r] = matrix[r][c];
    }
  }

  return out;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (!arr || arr.length <= 1) return arr;

  const a = arr;

  const stack = [];
  stack[stack.length] = 0;
  stack[stack.length] = a.length - 1;

  while (stack.length > 0) {
    const hi = stack[stack.length - 1];
    stack.length -= 1;
    const lo = stack[stack.length - 1];
    stack.length -= 1;

    const pivot = a[hi];
    let i = lo - 1;

    for (let j = lo; j <= hi - 1; j += 1) {
      if (a[j] <= pivot) {
        i += 1;

        const t = a[i];
        a[i] = a[j];
        a[j] = t;
      }
    }

    const pi = i + 1;
    const t2 = a[pi];
    a[pi] = a[hi];
    a[hi] = t2;

    if (pi - 1 > lo) {
      stack[stack.length] = lo;
      stack[stack.length] = pi - 1;
    }
    if (pi + 1 < hi) {
      stack[stack.length] = pi + 1;
      stack[stack.length] = hi;
    }
  }

  return a;
}
/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  if (!str) return '';
  const n = str.length;
  if (n <= 1) return str;

  const perm = [];
  const nEven = Math.ceil(n / 2);

  for (let k = 0; k < n; k += 1) {
    if (k % 2 === 0) {
      perm[k] = Math.floor(k / 2);
    } else {
      perm[k] = nEven + Math.floor((k - 1) / 2);
    }
  }

  const resultArr = [];
  for (let i = 0; i < n; i += 1) {
    resultArr[i] = '';
  }

  const visited = [];
  for (let s = 0; s < n; s += 1) {
    visited[s] = false;
  }

  for (let start = 0; start < n; start += 1) {
    if (visited[start]);

    const cycle = [];
    let cur = start;

    while (!visited[cur]) {
      cycle[cycle.length] = cur;
      visited[cur] = true;
      cur = perm[cur];
    }

    const cycleLen = cycle.length;

    for (let idx = 0; idx < cycleLen; idx += 1) {
      const fromIndex = cycle[idx];
      const toIndex = cycle[(idx + (iterations % cycleLen)) % cycleLen];

      resultArr[toIndex] = str[fromIndex];
    }
  }

  let out = '';
  for (let p = 0; p < n; p += 1) {
    out += resultArr[p];
  }

  return out;
}
/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
  if (number < 0) return number;

  const n = Math.floor(number);
  if (n === 0) return number;

  const digitsRev = [];
  let idx = 0;

  let temp = n;
  while (temp > 0) {
    digitsRev[idx] = temp % 10;
    temp = Math.floor(temp / 10);
    idx += 1;
  }

  const len = idx;
  const digits = [];

  for (let i = 0; i < len; i += 1) {
    digits[i] = digitsRev[len - 1 - i];
  }

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i < 0) {
    return number;
  }

  let j = digits.length - 1;
  while (j > i && digits[j] <= digits[i]) {
    j -= 1;
  }

  const tmp = digits[i];
  digits[i] = digits[j];
  digits[j] = tmp;

  let left = i + 1;
  let right = digits.length - 1;

  while (left < right) {
    const t = digits[left];
    digits[left] = digits[right];
    digits[right] = t;

    left += 1;
    right -= 1;
  }

  let result = 0;
  for (let k = 0; k < digits.length; k += 1) {
    result = result * 10 + digits[k];
  }

  return result;
}
module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
