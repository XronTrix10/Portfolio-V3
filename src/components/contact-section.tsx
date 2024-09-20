"use client";

import { useEffect, useMemo, useState } from "react";
import type { JSX } from "react";

import useStorage from "@/lib/hooks/useStorage.hook";

import TextEditor from "./text-editor";

/**
 * renders the ContactSection component.
 * @returns {JSX.Element} the ContactSection component.
 */
const ContactSection = (): JSX.Element => {
  const [contacts, setContacts] = useStorage("contacts", ["blank"]);
  const [content, setContent] = useState<string>("");

  const state = useMemo(() => {
    return contacts[0];
  }, [contacts]);

  /**
   * Handles the save action.
   */
  const handleSave = (): void => {
    setContacts(contacts);
    console.log(contacts);

    alert(content);
  };

  useEffect(() => {
    console.log(content);
  }, [content, setContent]);

  useEffect(() => {
    /**
     * Handles the keyboard event.
     * @param {KeyboardEvent} event the keyboard event.
     */
    const handleKeyDown = (event: KeyboardEvent): void => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        handleSave();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return (): void => {
      window.removeEventListener("keydown", handleKeyDown);
    };

    // The array is left empty to run it only once when the component is mounted
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-3xl">
        {state === "blank"
          ? "Just text a Hi! 👋"
          : state === "wrote"
            ? "How can I reach you? 📲"
            : "You can text again! 👋"}
      </h1>
      <h4 className="mt-6 text-dark-gray">
        {state === "wrote" ? (
          <>
            <p>You can give anything! email, phone, social media, etc</p>
            <p className="text-center">
              or you may leave &quot;anounymous&quot;
            </p>
          </>
        ) : (
          <>
            <p>
              After writing, hit <span className="text-light">ctrl+s</span> to
              save and start sending :D
            </p>
            <p className="text-center">use cmd+s if you are on Mac</p>
          </>
        )}
      </h4>
      <div className="mx-auto max-w-[40rem]">
        <TextEditor content={content} setContent={setContent} />
      </div>
    </section>
  );
};

export default ContactSection;
