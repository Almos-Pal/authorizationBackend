import React from "react";
import { Link, useNavigate } from "react-router-dom";
import loginUser from "../API/loginUser";

function LogInPage() {
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      //   const credentials = {
      //     email: event.target.email.value,
      //     password: event.target.password.value,
      //   };

      const result = await loginUser("credentials");
      console.log("asd");
      console.log("Login successful:", result);
      navigate("/");
      // Optionally, redirect to another page or show a success message
    } catch (error) {
      console.error("Error logging in:", error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              //   required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              //   required
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/register" className="text-blue-400 hover:underline">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
