import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { User } from "firebase/auth";

export const useUser = () => {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    });
  });

  return { user };
};
