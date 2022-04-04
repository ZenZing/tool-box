import { HELLO } from './types';
import homeResource from '../resources/homeResource';

export const sayHello = () => dispatch => {
  homeResource.sayHello()
    .then(data => dispatch({
      type: HELLO,
      payload: data
    }))
    .catch(err => {
      console.error(err);
    });
};

export default {
  sayHello
};