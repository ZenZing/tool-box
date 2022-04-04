import classNames from 'classnames';
import React from 'react'
import PointTarget from 'react-point';
import './CalculatorKey.less';

const CalculatorKey = (props) => {
  const { handlePress, className } = props;

  return (
    <PointTarget onPoint={handlePress}>
      <button
        {...props}
        className={classNames('calculator-key', className)}
      />
    </PointTarget>
  )
};

export default CalculatorKey;