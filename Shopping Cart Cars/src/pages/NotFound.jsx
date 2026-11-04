import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex flex-col items-center gap-4 px-4 py-16 text-center">
      <h1 className="text-5xl font-bold text-cyan-800">404</h1>
      <p className="text-gray-600">Page Not Found</p>
      <Link
        to="/"
        className="bg-cyan-800 text-white rounded-lg px-6 py-2 font-semibold hover:bg-cyan-700"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}

export default NotFound;
