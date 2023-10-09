export const CategoryList = ({ categories }) => (
  categories.map(category => (
    <div className="ui card">
      <div className="ui content">
        <div className="ui description">
          <p>
            { `${category.title} - ${category.owner.name}` }
          </p>
        </div>

        {category.products.length !== 0 ? (
          <ul className="ui list">
            {category.products.map(prod => (
              <li key={prod.id}>{prod.name}</li>
            ))}
          </ul>
        ) : (
          <b>No products</b>
        )}
        ;
      </div>
    </div>
  ))
);
