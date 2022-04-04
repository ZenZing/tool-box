import { HELLO } from '../actions/types';

const initState = {
  helloMessage: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case HELLO:
      return {
        ...state,
        helloMessage: action.payload
      };

    default:
      return state
  }
};