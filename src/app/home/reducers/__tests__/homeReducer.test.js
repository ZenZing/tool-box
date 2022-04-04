import homeReducer from '../homeReducer';
import { HELLO } from '../../actions/types';

describe('home reducer tests', () => {

  const action = {
    type: HELLO,
    payload: ''
  };

  beforeAll(() => {
    action.payload = "Hello";
  });

  it('should return hello', async () => {
    const expected = action.payload;
    const actualState = homeReducer(undefined, action);
    expect(actualState.helloMessage).toBe(expected);
  });
});