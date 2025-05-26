import Link from "next/link";

export default function notFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page introuvable</h1>
      <p className="text-gray-600 mb-6">
        Oups, cette page n'existe pas ou n'est plus disponible.
      </p>
      <Link href="/">
        <button className="px-6 py-2 text-white rounded bg-slate-500 hover:bg-slate-900  transition">
          Retourner sur O'Bad
        </button>
      </Link>
    </div>
  );
}
