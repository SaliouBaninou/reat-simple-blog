export function ErrorPage({ error }) {
  return (
    <div>
      <h1>La page demander n'existe pas</h1>
      <p>Error: {error}</p>
    </div>
  );
}
