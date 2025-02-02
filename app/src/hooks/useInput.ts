import { useState, ChangeEventHandler } from "react";

interface ResetFunction {
  (): void;
}

interface Bind<T> {
  value: T;
  onChange: ChangeEventHandler<any>;
}

/**
 * Хук ввода по изменению
 * @param initialValue Значение по-умолчанию
 * @returns {Array}
 */
export function useInput<T>(initialValue: T): [T, Bind<T>, ResetFunction] {
  const [value, setValue] = useState<T>(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind: Bind<T> = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset];
}
