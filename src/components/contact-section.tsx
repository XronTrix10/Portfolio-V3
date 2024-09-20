"use client";

import { useMemo, useState } from "react";
import type { JSX } from "react";

import type { ContactMe } from "@/lib/@types";
import useStorage from "@/lib/hooks/useStorage.hook";

import TextEditor from "./text-editor";

/**
 * renders the ContactSection component.
 * @returns {JSX.Element} the ContactSection component.
 */
const ContactSection = (): JSX.Element => {
  const [contacts, setContacts] = useStorage("contacts", ["blank"]);
  const [content, setContent] = useState<string>("");
  const [data, setData] = useState<ContactMe>({
    message: "",
    contact: "",
  });

  const state = useMemo(() => {
    return contacts[0];
  }, [contacts]);

  /**
   * Sends the contact data to the server.
   * @param {ContactMe} data the contact data.
   * @returns {Promise<void>} a promise that resolves when the contact data is sent.
   */
  const handleSend = async (data: ContactMe): Promise<void> => {
    console.log(data);
  };

  /**
   * Handles the send action.
   */
  const handleSave = async (): Promise<void> => {
    if (!content) return;

    if (state === "blank" || state === "sent") {
      setData((data) => ({ ...data, message: content }));
      const temp = [...contacts];
      temp[0] = "wrote";
      temp.push(content);
      setContacts(temp);
      setContent("");
    } else {
      setData((data) => ({ ...data, contact: content }));
      const temp = [...contacts];
      temp[0] = "sent";
      setContacts(temp);
      setContent("");
      await handleSend(data);
    }
  };

  /**
   * Handles the keyboard event.
   * @param {KeyboardEvent} event the keyboard event.
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (event.key === "Enter") {
      void handleSave();
    }
  };

  return (
    <section
      onKeyDown={handleKeyDown}
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl">
        {state === "blank"
          ? "Just text a Hi! 👋"
          : state === "wrote"
            ? "How can I reach you? 📲"
            : "You can text me again! 👋"}
      </h1>
      <h4 className="mt-6 text-dark-gray">
        {state === "wrote" ? (
          <>
            <p>You can give anything! email, phone, social media, etc</p>
            <p className="text-center">
              or you may leave &quot;anonymous&quot;
            </p>
          </>
        ) : (
          <p>
            After writing, hit <span className="text-light">Enter</span> to save
            and start sending :D
          </p>
        )}
      </h4>
      <div className="mx-auto max-w-[40rem]">
        <TextEditor content={content} setContent={setContent} />
      </div>
      {state === "wrote" && (
        <span className="mx-auto text-xs text-dark-gray">
          hit Enter to send
        </span>
      )}
    </section>
  );
};

export default ContactSection;
