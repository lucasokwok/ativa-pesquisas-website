export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-32 py-5 text-sm text-zinc-400">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Ativa Pesquisas</span>
          <span>
            Biocorrosão • Durabilidade sustentável • Ligantes alternativos
          </span>
        </div>
      </div>
    </footer>
  );
}
