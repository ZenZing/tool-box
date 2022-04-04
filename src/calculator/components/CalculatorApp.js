import React, { useEffect, useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKey from './CalculatorKey';
import './CalculatorApp.less';

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}

export const CalculatorApp = (props) => {
  const [value, setValue] = useState(null);
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  const clearAll = () => {
    setValue(null);
    setDisplayValue('0');
    setOperator(null);
    setWaitingForOperand(false);
  };

  const clearDisplay = () => {
    setDisplayValue('0');
  };

  const clearLastChar = () => {
    setDisplayValue(displayValue.substring(0, displayValue.length - 1) || '0');
  };

  const toggleSign = () => {
    const newValue = parseFloat(displayValue) * -1
    setDisplayValue(newValue.toString());
  };

  const inputPercent = () => {
    const currentValue = parseFloat(displayValue)

    if (currentValue === 0) return

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(displayValue) / 100

    setDisplayValue(newValue.toFixed(fixedDigits.length + 2));
  };

  const inputDot = () => {
    if (!(/\./).test(displayValue)) {
      setDisplayValue(`${displayValue}.`);
      setWaitingForOperand(false);
    }
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(digit.toString());
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit.toString() : displayValue + digit);
    }
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue)

    if (value == null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value || 0
      const newValue = CalculatorOperations[operator](currentValue, inputValue)

      setValue(newValue);
      setDisplayValue(newValue.toString());
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const handleKeyDown = (event) => {
    let { key } = event;

    if (key === 'Enter') key = '=';

    if ((/\d/).test(key)) {
      event.preventDefault();
      inputDigit(parseInt(key, 10));
    } else if (key in CalculatorOperations) {
      event.preventDefault();
      performOperation(key);
    } else if (key === '.') {
      event.preventDefault();
      inputDot();
    } else if (key === '%') {
      event.preventDefault();
      inputPercent();
    } else if (key === 'Backspace') {
      event.preventDefault();
      clearLastChar();
    } else if (key === 'Clear') {
      event.preventDefault();

      if (displayValue !== '0') {
        clearDisplay();
      } else {
        clearAll();
      }
    }
  };

  const isClearDisplay = displayValue !== '0';
  const clearText = isClearDisplay ? 'C' : 'AC';

  return (
    <div className="calculator-app">
      <CalculatorDisplay value={displayValue} />
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <CalculatorKey className="key-clear" handlePress={() => isClearDisplay ? clearDisplay() : clearAll()}>{clearText}</CalculatorKey>
            <CalculatorKey className="key-sign" handlePress={() => toggleSign()}>±</CalculatorKey>
            <CalculatorKey className="key-percent" handlePress={() => inputPercent()}>%</CalculatorKey>
          </div>
          <div className="digit-keys">
            <CalculatorKey className="key-0" handlePress={() => inputDigit(0)}>0</CalculatorKey>
            <CalculatorKey className="key-dot" handlePress={() => inputDot()}>●</CalculatorKey>
            <CalculatorKey className="key-1" handlePress={() => inputDigit(1)}>1</CalculatorKey>
            <CalculatorKey className="key-2" handlePress={() => inputDigit(2)}>2</CalculatorKey>
            <CalculatorKey className="key-3" handlePress={() => inputDigit(3)}>3</CalculatorKey>
            <CalculatorKey className="key-4" handlePress={() => inputDigit(4)}>4</CalculatorKey>
            <CalculatorKey className="key-5" handlePress={() => inputDigit(5)}>5</CalculatorKey>
            <CalculatorKey className="key-6" handlePress={() => inputDigit(6)}>6</CalculatorKey>
            <CalculatorKey className="key-7" handlePress={() => inputDigit(7)}>7</CalculatorKey>
            <CalculatorKey className="key-8" handlePress={() => inputDigit(8)}>8</CalculatorKey>
            <CalculatorKey className="key-9" handlePress={() => inputDigit(9)}>9</CalculatorKey>
          </div>
        </div>
        <div className="operator-keys">
          <CalculatorKey className="key-divide" handlePress={() => performOperation('/')}>÷</CalculatorKey>
          <CalculatorKey className="key-multiply" handlePress={() => performOperation('*')}>×</CalculatorKey>
          <CalculatorKey className="key-subtract" handlePress={() => performOperation('-')}>−</CalculatorKey>
          <CalculatorKey className="key-add" handlePress={() => performOperation('+')}>+</CalculatorKey>
          <CalculatorKey className="key-equals" handlePress={() => performOperation('=')}>=</CalculatorKey>
        </div>
      </div>
    </div>
  )
}

export default CalculatorApp;