// LogoutPage.tsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../API/logoutUser"; // Adjust path as per your project structure

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        console.log("anyad");
        await logoutUser(); // Call your logout function
        navigate("/"); // Redirect to home page after logout
      } catch (error) {
        console.error("Error logging out:", error);
        // Handle error as needed
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center p-6 max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Logging Out...</h1>
        {/* Optionally, add a loading spinner or message */}
      </div>
    </div>
  );
};

export default LogoutPage;
