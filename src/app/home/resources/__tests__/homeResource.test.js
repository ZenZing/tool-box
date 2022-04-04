import { sayHello } from '../homeResource';

describe('home resource api tests', () => {

  it('should resolve hello', async () => {
    const expected = 'Hello World';
    const actual = await sayHello();
    expect(actual).toEqual(expected);
  });
});