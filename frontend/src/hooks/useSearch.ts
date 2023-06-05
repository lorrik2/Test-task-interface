import { useEffect, useState } from 'react';

export const useValidation = (value: any, validations: any): any => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [isString, setIsString] = useState(false);
  const [inpValid, setInpValid] = useState(false);

  console.log(isEmpty, isString, minLengthError, 'hooc');
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'isString':
          typeof value === 'string' ? setIsString(true) : setIsString(false);
          break;
      }
    }
  }, [validations, value]);

  useEffect(() => {
    if (isEmpty || minLengthError || !isString) {
      setInpValid(false);
    } else {
      setInpValid(true);
    }
  }, [isEmpty, minLengthError, isString]);

  return { isEmpty, minLengthError, isString, inpValid };
};

export const useSearch = (initialValue: string | number, validations: any): any => {
  const [value, setValue] = useState(initialValue);
  const validate = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return { value, onChange, ...validate };
};
