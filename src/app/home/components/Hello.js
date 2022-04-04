import React from 'react';

const Hello = (props) => {
  return (
    <div data-testid="hello">
      {props.hello}
    </div>
  );
};

export default Hello;
export const TestHello = Hello;
