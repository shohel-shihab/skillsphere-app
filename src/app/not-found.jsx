import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-blue-100 text-center px-4">
      
      <h1 className="text-7xl font-bold text-teal-700">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold"
      >
        Go Home
      </Link>
    </div>
  );
}