import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useToken = () => {
  const [token, setToken] = useState<string | undefined>(() =>
    Cookies.get("token")
  );

  useEffect(() => {
    const accesss_token = Cookies.get("token");
    setToken(accesss_token);
  });

  return { token };
};
