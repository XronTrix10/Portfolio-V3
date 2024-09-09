"use client";

import { useEffect, useState } from "react";

/**
 * Hook to manage local storage array.
 * @param {string} key - The key to store the array in local storage.
 * @param {string[]} initialValue - The initial value of the array.
 * @returns {[string[], (newValue: string[]) => void]} - The array and a function to update the array.
 */
const useLocalStorageArray = (
  key: string,
  initialValue: string[] = [],
): [string[], (newValue: string[]) => void] => {
  /**
   * A function to get the array of strings stored in local storage.
   * @returns {string[]} The array of strings stored in local storage.
   */
  const getStoredValue = (): string[] => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  };

  // State to hold the array of strings
  const [storedValue, setStoredValue] = useState<string[]>(getStoredValue);

  // Effect to update localStorage whenever the storedValue changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  }, [key, storedValue]);

  /**
   * Function to update the array of strings in local storage.
   * @param {string[]} newValue - The new array of strings to be stored.
   */
  const updateValue = (newValue: string[]): void => {
    setStoredValue(newValue);
  };

  return [storedValue, updateValue] as const; // Return a tuple
};

export default useLocalStorageArray;
