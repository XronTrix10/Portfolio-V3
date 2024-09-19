import type { KeyboardEvent } from "react";
import { useState } from "react";

type CursorReturns = {
  handleOnFocus: () => void;
  handleOnBlur: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  shifts: number;
  paused: boolean;
};

/**
 * Custom hook to manage cursor position and state.
 * @param {string} content - The content to manage the cursor position within.
 * @returns {CursorReturns} An object containing event handlers and cursor state.
 */
const useCursor = (content: string): CursorReturns => {
  const [shifts, setShifts] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  let timeoutRef: NodeJS.Timeout | null = null;

  /**
   * Pauses the cursor movement for a specified timeout.
   */
  const pauseWithTimeout = (): void => {
    setPaused(true);

    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }

    timeoutRef = setTimeout(() => {
      setPaused(false);
    }, 500);
  };

  /**
   * Updates the cursor shifts based on the key pressed.
   * @param {string} key - The key that was pressed.
   */
  const updateShifts = (key: string): void => {
    switch (key) {
      case "ArrowLeft":
        if (content.length > shifts) {
          setShifts(shifts + 1);
        }
        break;
      case "ArrowRight":
        if (shifts > 0) {
          setShifts(shifts - 1);
        }
        break;
      case "Delete":
        if (content.length >= shifts) {
          setShifts(shifts - 1);
        }
        break;
      case "Home":
      case "ArrowUp":
        setShifts(content.length);
        break;
      case "End":
      case "ArrowDown":
        setShifts(0);
        break;
      default:
        break;
    }
  };

  /**
   * Handles the focus event to resume cursor movement.
   */
  const handleOnFocus = (): void => {
    setPaused(false);
  };

  /**
   * Handles the blur event to pause cursor movement.
   */
  const handleOnBlur = (): void => {
    setPaused(true);
  };

  /**
   * Handles key down events to update cursor position.
   * @param {KeyboardEvent} event - The keyboard event.
   */
  const handleKeyDown = (event: KeyboardEvent): void => {
    pauseWithTimeout();
    updateShifts(event.key);
  };

  return {
    handleOnFocus,
    handleOnBlur,
    handleKeyDown,
    shifts,
    paused,
  };
};

export default useCursor;
