import expect from 'expect';
import {
  isNumberEven,
  getFileExtension,
  longestString,
  reverseString,
  isPalindrome,
  nestedSum,
} from '../src';


describe('JS Basics Tests', () => {
  describe('isNumberEven', () => {
    it('42 should be even', () => {
      expect(isNumberEven(42)).toBe(true);
    });

    it('-1 should be odd', () => {
      expect(isNumberEven(-1)).toBe(false);
    });

    it('33 should be odd', () => {
      expect(isNumberEven(33)).toBe(false);
    });

    it('0 should be even', () => {
      expect(isNumberEven(0)).toBe(true);
    });

    const rnd = Math.floor(Math.random() * 1000000) * 2;
    it('random even number should be even', () => {
      expect(isNumberEven(rnd)).toBeTruthy();
    });
  });

  describe('Test getFileExtension', () => {
    it('Should be "png"', () => {
      expect(getFileExtension('image.png')).toEqual('png');
    });

    it('Should be "torrent"', () => {
      expect(getFileExtension('perfectlylegal.torrent')).toEqual('torrent');
    });

    it('Spaces are ok in file names', () => {
      expect(getFileExtension('Spaces are ok in file names.txt')).toEqual('txt');
    });

    it('last extention token only', () => {
      expect(getFileExtension('archive.tar.gz')).toEqual('gz');
    });

    it('Should return false when no extention is found', () => {
      expect(getFileExtension('no extention here')).toBe(false);
    });
  });

  describe('Test longestString', () => {
    it('The longest string is the last one: "abc"', () => {
      expect(longestString(['a', 'ab', 'abc'])).toEqual('abc');
    });

    it('be sure it\'s a string', () => {
      expect(longestString(['big', [0, 1, 2, 3, 4], 'tiny'])).toEqual('tiny');
    });

    it('utf-8...', () => {
      expect(longestString(['Holà', '\u265E', '你好'])).toEqual('Holà');
    });

    it('various types', () => {
      expect(longestString([true, false, 'lol'])).toEqual('lol');
    });

    it('various types agian', () => {
      expect(longestString([{ object: true, mainly: 'to confuse you' }, 'x'])).toEqual('x');
    });
  });

  describe('Test reverseString', () => {
    it('Should reverse normal chars in a string', () => {
      expect(reverseString('Hello World!')).toEqual('!dlroW olleH');
    });

    it('Should reverse spaces too', () => {
      expect(reverseString('   abc')).toEqual('cba   ');
    });
  });

  describe('Test isPalindrome', () => {
    it('Should check ascii palindrome with spaces', () => {
      expect(isPalindrome('rats live on no evil star')).toBeTruthy();
    });
    it('Should check ascii palindrome with upper cases', () => {
      expect(isPalindrome('Able was I ere I saw Elba')).toBeTruthy();
    });
    it('Should check utf8', () => {
      expect(isPalindrome('たけやぶやけた')).toBeTruthy();
    });
    it('nope', () => {
      expect(isPalindrome('not this one...')).toBe(false);
    });
  });

  describe('Test nestedSum', () => {
    it('Should work with flat number array', () => {
      expect(nestedSum([1, 2, 3, 4, 5])).toBe(15);
    });

    it('Should work with nested array and other types', () => {
      expect(nestedSum([[1, 2, false], '4', '5'])).toBe(3);
    });

    it('Should work with deeply nested arrays', () => {
      expect(nestedSum([[[[[[[[[1]]]]]]]], 1])).toBe(2);
    });

    it('Should work with deeply nested array + Strings', () => {
      expect(nestedSum([['A', 'B', 'C', 1, 2, 3]])).toBe(6);
    });

    it('Should be carrefull not to coerce values', () => {
      expect(nestedSum(['1', '2', '3', 1, 2, 3])).toBe(6);
    });

    it('Should return 0 is no number found', () => {
      expect(nestedSum(['nope', false, 'nada', ['rien']])).toBe(0);
    });
  });
});
