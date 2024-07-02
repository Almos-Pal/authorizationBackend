import { endpoints } from "../constants/endpoints";

export default async function signUpUser(credentials: any) {
  const testData = {
    userName: "testuser",
    password: "password123",
    confirmPassword: "password123", // Add confirmPassword if needed
  };
  try {
    const response: Response = await fetch(endpoints.register, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    if (!response.ok) {
      throw new Error("Failed to sign up");
    }

    return response.json();
  } catch (error) {
    console.error("Error signing  up:", error);
    throw error;
  }
}
