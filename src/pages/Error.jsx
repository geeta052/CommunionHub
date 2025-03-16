import { Link, useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError();
    
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
            <p className="text-lg text-gray-700 mt-2">Something went wrong.</p>

            {error?.status && (
                <p className="text-gray-500 mt-2">
                    Error {error.status}: {error.statusText || "Unknown error"}
                </p>
            )}

            {/* Back to Home Button */}
            <Link to="/" className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition">
                Go to Home
            </Link>
        </div>
    );
}

export default Error;
