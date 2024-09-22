"use client";

import { useState } from "react";
import type { JSX } from "react";

import type { StoreContactMsg } from "@/lib/@types";
import type { ContactMe } from "@/lib/@types";
import useLocalStorage from "@/lib/hooks/useLocalStorage.hook";
import LoadingIcon from "@/assets/icons/loading";

import TextEditor from "./text-editor";

/**
 * renders the ContactSection component.
 * @returns {JSX.Element} the ContactSection component.
 */
const ContactSection = (): JSX.Element => {
  const [contacts, setContacts] = useLocalStorage<StoreContactMsg>("contacts", {
    status: "blank",
    message: "",
    count: 0,
  });
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ContactMe>({
    message: "",
    contact: "",
  });

  /**
   * Sends the contact data to the server.
   * @param {ContactMe} data the contact data.
   * @returns {Promise<void>} a promise that resolves when the contact data is sent.
   */
  const handleSend = async (data: ContactMe): Promise<void> => {
    setLoading(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_MAIL_BACKEND! + "/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handles the send action.
   */
  const handleSave = async (): Promise<void> => {
    if (!content) return;

    if (contacts.status === "blank" || contacts.status === "sent") {
      setData((data) => ({ ...data, message: content }));
      const temp: StoreContactMsg = {
        status: "wrote", // set the status to wrote when a message is wrote
        message: content, // set the message to the content
        count: contacts.count,
      };
      setContacts(temp);
      setContent("");
    } else {
      setData({ ...data, contact: content });
      const temp: StoreContactMsg = {
        status: "sent", // set the status to sent when a message is sent
        message: contacts.message,
        count: contacts.count + 1, // increment the count when a message is sent
      };
      setContacts(temp);
      setContent("");
      await handleSend({ message: contacts.message, contact: content });
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
        {contacts.status === "blank"
          ? "Just text a Hi! 👋"
          : contacts.status === "wrote"
            ? "How can I reach you? 📲"
            : "You can text me again! 😀"}
      </h1>
      <h4 className="mt-6 text-dark-gray">
        {contacts.status === "wrote" ? (
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
      {contacts.status === "wrote" && (
        <span className="mx-auto text-xs text-dark-gray">
          hit Enter to send
        </span>
      )}
      {loading ? (
        <span className="mx-auto flex items-center gap-x-2 text-xs text-dark-gray">
          sending your message
          <div className="animate-spin">
            <LoadingIcon size={12} />
          </div>
        </span>
      ) : (
        contacts.status === "sent" && (
          <span className="mx-auto text-xs text-dark-gray">
            your last message was sent
          </span>
        )
      )}
    </section>
  );
};

export default ContactSection;
