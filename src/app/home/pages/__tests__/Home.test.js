import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { TestHome } from '../Home';

describe('home tests', () => {

  it('should render hello', () => {
    const expected = 'hello';
    const props = {
      helloMessage: expected,
      sayHello: jest.fn()
    };

    const { getByTestId } = render(
      <Router>
        <TestHome {...props} />
      </Router>
    );
    const [actual] = [getByTestId('hello')];

    expect(actual).toHaveTextContent(expected);
    expect(props.sayHello.mock.calls.length).toBe(1);
  });
});