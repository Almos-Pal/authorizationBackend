import { useState, useEffect } from "react";
import { endpoints } from "../constants/endpoints";

const useTokenVerification = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch(endpoints.users, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to verify token");
        }

        const data = await response.json();
        console.log(data);

        setIsLoggedIn(true);
      } catch (error) {
        console.error(error);
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, []);

  return { isLoggedIn, isLoading };
};

export default useTokenVerification;
