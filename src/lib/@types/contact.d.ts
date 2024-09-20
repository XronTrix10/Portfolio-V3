export type ContactMe = {
  message: string;
  contact: string;
};

export type StoreContactMsg = {
  status: "blank" | "wrote" | "sent";
  message: string;
  count: number;
};
