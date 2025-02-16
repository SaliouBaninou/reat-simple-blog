import { Card } from "../components/Card";
import { Spiner } from "../components/Spiner";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useFetch } from "../hooks/useFetch";
import { useHashNavigation } from "../hooks/useHashNavigation";

export function Blog() {
  const { page } = useHashNavigation();
  useDocumentTitle(page);
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  if (loading) {
    return <Spiner />;
  }

  if (error) {
    return <p>Une erreur s'est produit</p>;
  }

  return (
    <div className="p-4 max-w-full w-[1050px] m-auto">
      <h1 className="mb-8 mt-4 text-2xl font-medium text-center">
        Listing des articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3  ">
        {data.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            description={article.title}
            id={article.id}
            image={`https://picsum.photos/500/300?random=${article.id}`}
          />
        ))}
      </div>
    </div>
  );
}
