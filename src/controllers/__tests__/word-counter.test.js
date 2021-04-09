import wordCounter from '../word-counter';

describe('Test word-counter.js', () => {
  describe('Tests on wordCounter function', () => {
    it('should return correct number in a Normal Case', () => {
      const condition1 = 'I Am A Full Sentence';

      const result = 5;

      expect(wordCounter(condition1)).toEqual(result);
    });

    it('should return 0 when given an empty string', () => {
      const param = '';

      const result = 0;

      expect(wordCounter(param)).toEqual(result);
    });

    it('should throw error when given undefined', () => {
      const param = undefined;

      expect(() => {
        wordCounter(param);
      }).toThrow('Expected string, got undefined');
    });

    it('should return 2 when given 2 words with 1 space', () => {
      const param = 'Hello world';

      const result = 2;

      expect(wordCounter(param)).toEqual(result);
    });

    it('should return 1 when given 1 word without space', () => {
      const param = 'Hello';

      const result = 1;

      expect(wordCounter(param)).toEqual(result);
    });

    it('should return 1 when no space between words', () => {
      const param = 'Helloworld';

      const result = 1;

      expect(wordCounter(param)).toEqual(result);
    });

    it('should return correct number of word when the given string starts with a space', () => {
      const param = ' Hello world';

      const result = 2;

      expect(wordCounter(param)).toEqual(result);
    });

    it('should return correct number of word when the given string ends with a space', () => {
      const param = 'Hello world ';

      const result = 2;

      expect(wordCounter(param)).toEqual(result);
    });

    it('should return correct number of word when the given string ends and starts with a space', () => {
      const param = ' Hello World ';

      const result = 2;

      expect(wordCounter(param)).toEqual(result);
    });

    it('should return correct number of word when given more than 1 space in a row', () => {
      const param = 'Hello               world';

      const result = 2;

      expect(wordCounter(param)).toEqual(result);
    });

    it('should return 1 for a composed word', () => {
      const param = 'Sweat-shirt';

      const result = 2;

      expect(wordCounter(param)).toEqual(result);
    });

    it('should return 0 for only punctuations', () => {
      const param = '?!';

      const result = 0;

      expect(wordCounter(param)).toEqual(result);
    });
  });
});
