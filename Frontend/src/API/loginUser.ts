import { endpoints } from "../constants/endpoints";

export default async function loginUser(credentials: any) {
  const testData = {
    userName: "testuser",
    password: "password123",
  };
  try {
    const response: Response = await fetch(endpoints.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }
    response.headers.get("Set-Cookie");

    return response.json();
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}
