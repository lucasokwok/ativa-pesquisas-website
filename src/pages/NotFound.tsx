import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Página não encontrada
      </h1>
      <p className="text-zinc-300">A rota acessada não existe.</p>
      <Link
        className="inline-flex rounded-xl border border-zinc-800 px-4 py-2 hover:border-zinc-700"
        to="/"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
