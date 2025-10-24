// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import { fetchArticles, fetchProducts, fetchSaaS } from './services/api';

function App() {
  const [articles, setArticles] = useState([]);
  const [products, setProducts] = useState([]);
  const [saas, setSaaS] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [articlesData, productsData, saasData] = await Promise.all([
          fetchArticles(),
          fetchProducts(),
          fetchSaaS(),
        ]);
        setArticles(articlesData);
        setProducts(productsData);
        setSaaS(saasData);
        setLoading(false);
      } catch (err) {
        console.error("Ошибка при загрузке данных:", err);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p style={{ padding: '20px' }}>Загрузка данных...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Экспертный портал климатической техники</h1>

      {/* Раздел статей */}
      <section>
        <h2>Статьи с WordPress</h2>
        {articles.length === 0 ? (
          <p>Статей пока нет.</p>
        ) : (
          <ul>
            {articles.map(article => (
              <li key={article.id}>{article.title.rendered}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Раздел партнерских товаров */}
      <section>
        <h2>Партнерские товары</h2>
        {products.length === 0 ? (
          <p>Товары пока не загружены.</p>
        ) : (
          <ul>
            {products.map(product => (
              <li key={product.id}>
                {product.name} — {product.price} {product.currency || '₽'}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Раздел SaaS */}
      <section>
        <h2>SaaS-модуль</h2>
        <p>{saas ? saas.feature : 'Модуль недоступен'}</p>
      </section>
    </div>
  );
}

export default App;
