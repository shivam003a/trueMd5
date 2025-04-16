import React from 'react';
import Link from 'next/link'

function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500 font-poppins">404</h1>
                <p className="text-2xl mt-4 text-gray-700 font-poppins">Page Not Found</p>
                <p className="mt-2 text-cs-gray font-poppins">The page you are looking for does not exist or has been moved.</p>
                <Link
                    href="/"
                    className="mt-6 inline-block px-6 py-3 text-white bg-cs-blue rounded-md hover:bg-blue-600 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound