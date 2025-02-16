import { Spiner } from "../components/Spiner";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useFetch } from "../hooks/useFetch";

export function Single({ postId }) {
  useDocumentTitle(`article ${postId}`);
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) {
    return <Spiner />;
  }

  if (error) {
    return <p>Une erreur s'est produit</p>;
  }
  return (
    <div className="max-w-full w-[750px] m-auto p-4">
      <div className="w-full mb-8">
        <img
          src={`https://picsum.photos/500/300?random=${postId}`}
          className="w-full object-cover"
          alt=""
        />
      </div>
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
