declare namespace User {
  export type User = {
    id: string;
    name: string;
    email: string;
    image: string;
    createdAt: string;
  };

  export type UserStatus = "active" | "inactive";
}

export default User;
