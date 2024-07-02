import { endpoints } from "../constants/endpoints";

export const logoutUser = async () => {
  try {
    const response = await fetch(endpoints.logout, {
      method: "POST",
      credentials: "include", // Send cookies along with the request
    });
    if (response.ok) {
      console.log("Logout successful");
      // Perform additional client-side logout actions if needed
    } else {
      console.error("Logout failed");
      // Handle logout failure
    }
  } catch (error) {
    console.error("Error logging out:", error);
    // Handle network or other errors
  }
};
