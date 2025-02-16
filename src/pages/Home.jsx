import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function Home() {
  useDocumentTitle("Home");
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Bonjour ici</h1>
          <p className="mb-5">
            C'est un blog fait avec React et Vite En utilisant la librairie
            DaisyUI et jsonplaceholder pour les données
          </p>
          <a href="#blog" className="btn btn-primary">
            Voir les articles
          </a>
        </div>
      </div>
    </div>
  );
}
