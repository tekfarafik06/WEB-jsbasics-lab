import {
  isNumberEven,
  getFileExtension,
  longestString,
  reverseString,
  isPalindrome,
  nestedSum,
} from '../src';


describe('JS Basics Tests', () => {
  describe('Test isNumberEven', () => {
    test('42 should be even', () => {
      expect(isNumberEven(42)).toBe(true);
    });

    test('-1 should be odd', () => {
      expect(isNumberEven(-1)).toBe(false);
    });

    test('33 should be odd', () => {
      expect(isNumberEven(33)).toBe(false);
    });

    test('0 should be even', () => {
      expect(isNumberEven(0)).toBe(true);
    });

    const rnd = Math.floor(Math.random() * 1000000) * 2;
    test('random even number should be even', () => {
      expect(isNumberEven(rnd)).toBeTruthy();
    });
  });

  describe('Test getFileExtension', () => {
    test('Should be "png"', () => {
      expect(getFileExtension('image.png')).toEqual('png');
    });

    test('Should be "torrent"', () => {
      expect(getFileExtension('perfectlylegal.torrent')).toEqual('torrent');
    });

    test('Spaces are ok in file names', () => {
      expect(getFileExtension('Spaces are ok in file names.txt')).toEqual('txt');
    });

    test('last extension token only', () => {
      expect(getFileExtension('archive.tar.gz')).toEqual('gz');
    });

    test('Should return false when no extension is found', () => {
      expect(getFileExtension('no extension here')).toBe(false);
    });
  });

  describe('Test longestString', () => {
    test('The longest string is the last one: "abc"', () => {
      expect(longestString(['a', 'ab', 'abc'])).toEqual('abc');
    });

    test('be sure it\'s a string', () => {
      expect(longestString(['big', [0, 1, 2, 3, 4], 'tiny'])).toEqual('tiny');
    });

    test('utf-8...', () => {
      expect(longestString(['Holà', '\u265E', '你好'])).toEqual('Holà');
    });

    test('various types', () => {
      expect(longestString([true, false, 'lol'])).toEqual('lol');
    });

    test('various types again', () => {
      expect(longestString([{ object: true, mainly: 'to confuse you' }, 'x'])).toEqual('x');
    });
  });

  describe('Test reverseString', () => {
    test('Should reverse normal chars in a string', () => {
      expect(reverseString('Hello World!')).toEqual('!dlroW olleH');
    });

    test('Should reverse spaces too', () => {
      expect(reverseString('   abc')).toEqual('cba   ');
    });
  });

  describe('Test isPalindrome', () => {
    test('Should check ascii palindrome with spaces', () => {
      expect(isPalindrome('rats live on no evil star')).toBeTruthy();
    });
    test('Should check ascii palindrome with upper cases', () => {
      expect(isPalindrome('Able was I ere I saw Elba')).toBeTruthy();
    });
    test('Should check utf8', () => {
      expect(isPalindrome('たけやぶやけた')).toBeTruthy();
    });
    test('nope', () => {
      expect(isPalindrome('not this one...')).toBe(false);
    });
  });

  describe('Test nestedSum', () => {
    test('Should work with flat number array', () => {
      expect(nestedSum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('Should work with nested array and other types', () => {
      expect(nestedSum([[1, 2, false], '4', '5'])).toBe(3);
    });

    test('Should work with deeply nested arrays', () => {
      expect(nestedSum([[[[[[[[[1]]]]]]]], 1])).toBe(2);
    });

    test('Should work with deeply nested array + Strings', () => {
      expect(nestedSum([['A', 'B', 'C', 1, 2, 3]])).toBe(6);
    });

    test('Should be careful not to coerce values', () => {
      expect(nestedSum(['1', '2', '3', 1, 2, 3])).toBe(6);
    });

    test('Should return 0 is no number found', () => {
      expect(nestedSum(['nope', false, 'nada', ['rien']])).toBe(0);
    });
  });
});
