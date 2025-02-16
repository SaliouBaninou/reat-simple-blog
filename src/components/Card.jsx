export function Card({ title, description, image, id }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm m-auto mb-8 max-w-full">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={`#post:${id}`}>
            Voir
          </a>
        </div>
      </div>
    </div>
  );
}
