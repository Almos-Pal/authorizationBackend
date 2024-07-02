import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ContainerLayoutProps {
  children: ReactNode;
}

function ContainerLayout({ children }: ContainerLayoutProps) {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="bg-gray-800">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Auth App</h1>
          <nav>
            <Link to="/" className="text-white mx-2 hover:text-gray-400">
              Home
            </Link>
            <Link to="/login" className="text-white mx-2 hover:text-gray-400">
              Log In
            </Link>
            <Link
              to="/register"
              className="text-white mx-2 hover:text-gray-400"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4 flex-grow">{children}</main>
    </div>
  );
}

export default ContainerLayout;
