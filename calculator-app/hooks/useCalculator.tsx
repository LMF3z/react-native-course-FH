import { useEffect, useRef, useState } from 'react';

enum Operator {
  add = '+',
  sub = '-',
  mul = '*',
  div = '/',
  mod = '%',
}

export const useCalculator = () => {
  const lastOperator = useRef<Operator | null>(null);

  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  useEffect(() => {
    if (lastOperator.current) {
      const firstPathForm = formula.split(' ').at(0);
      setFormula(`${firstPathForm} ${lastOperator.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(String(subResult));
  }, [formula]);

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (Number.isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.sub:
        return num1 - num2;

      case Operator.mul:
        return num1 * num2;

      case Operator.div:
        return num1 / num2;

      default:
        break;
    }
  };

  const calculateResult = () => {
    const subResult = calculateSubResult();
    setFormula(String(subResult));
    lastOperator.current = null;
    setPrevNumber('0');
  };

  const buildNumber = (numberString: string) => {
    // verificar si ya hay un punto
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      // evaluar si es diferente de cero no hay punto decimal y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      // Evitar el 0000000000.00
      if (numberString === '0' && !number.includes('.')) return;
    }

    setNumber(number + numberString);
  };

  const clean = () => {
    setFormula('');
    setNumber('0');
    setPrevNumber('0');
    lastOperator.current = null;
  };

  const toggleSign = () => {
    number.startsWith('-')
      ? setNumber(number.slice(1))
      : setNumber('-' + number);
  };

  const deleteLast = () => {
    if (number.length === 1) return setNumber('0');
    setNumber(number.slice(0, -1));
  };

  const setLastNumber = () => {
    calculateResult();

    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
      setNumber('0');
      return;
    }

    setPrevNumber(number);
    setNumber('0');
  };

  const addOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.add;
  };

  const subOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.sub;
  };

  const mulOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.mul;
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.div;
  };

  return {
    formula,
    number,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    addOperation,
    subOperation,
    mulOperation,
    divideOperation,
    calculateSubResult,
    calculateResult,
  };
};
