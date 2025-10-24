import { useEffect, useState } from "react";

function Partners() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_NODE_API_URL}/api/partners`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Партнёрские товары</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} — {p.price} ₽</li>
        ))}
      </ul>
    </div>
  );
}

export default Partners;
