declare namespace User {
  type User = {
    id: string;
    name: string;
    email: string;
    image: string;
    createdAt: string;
  };

  type UserStatus = "active" | "inactive";
}

export default User;
