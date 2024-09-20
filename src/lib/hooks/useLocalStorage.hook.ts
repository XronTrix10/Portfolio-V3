import { useEffect, useState } from "react";

/**
 * Custom hook for managing data in localStorage
 * @template T The type of data to be stored
 * @param {string} key The key under which to store the data in localStorage
 * @param {T} initialValue The initial value to use if no data is found in localStorage
 * @returns {[T, (value: T | ((val: T) => T)) => void]} A tuple containing the current value and a function to update it
 */
const useLocalStorage = <T>(
  key: string,
  initialValue: T,
  // eslint-disable-next-line no-unused-vars
): [T, (value: T | ((val: T) => T)) => void] => {
  /**
   * Helper function to get the stored value from localStorage
   * @returns {T} The stored value or the initial value if nothing is stored
   */
  const getStoredValue = (): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error retrieving data from localStorage:", error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  /**
   * Update the state and localStorage when the value changes
   * @param {T | ((val: T) => T)} value The new value or a function that returns the new value
   */
  // eslint-disable-next-line no-unused-vars
  const setValue = (value: T | ((val: T) => T)): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error("Error storing data in localStorage:", error);
    }
  };

  // Update the stored value if the key changes
  useEffect(() => {
    setStoredValue(getStoredValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [storedValue, setValue];
};

export default useLocalStorage;
