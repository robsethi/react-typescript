import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  //  const [user, setUser] = useState<AuthUser>({} as AuthUser)

  const handleLogin = () => {
    setUser({
      name: "Babu",
      email: "email@email.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User emailis {user?.email}</div>
    </>
  );
};
