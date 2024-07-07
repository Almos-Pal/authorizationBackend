import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function HomePage() {
  const { isLoggedIn, isLoading } = useAuth();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center p-6 max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Authorization App</h1>
        {isLoading ? (
          <div className="animate-pulse space-y-4">
            <div className="bg-gray-700 h-8 w-48 mb-2 rounded"></div>
            <div className="bg-gray-700 h-8 w-64 mb-2 rounded"></div>
            <div className="bg-gray-700 h-8 w-40 mb-2 rounded"></div>
          </div>
        ) : (
          <>
            {isLoggedIn ? (
              <p className="text-lg mb-6">You're logged in.</p>
            ) : (
              <>
                <p className="text-lg mb-6">
                  This is an authorization app. To see more pages, please log in
                  or register.
                </p>
                <div className="space-x-4">
                  <Link to="/login">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Log In
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                      Register
                    </button>
                  </Link>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
