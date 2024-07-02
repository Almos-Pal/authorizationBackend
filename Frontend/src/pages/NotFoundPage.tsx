import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className=" bg-gray-900 text-white flex flex-col items-center justify-center h-screen">
      <p className="text-4xl  mb-4">404 Not Found</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go to Home Page
      </Link>
    </div>
  );
}

export default NotFoundPage;
