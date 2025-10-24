// src/services/api.js

// Подключаем API URL из переменных окружения
const WP_API_URL = process.env.REACT_APP_WP_API_URL;
const NODE_API_URL = process.env.REACT_APP_NODE_API_URL;

/**
 * ==========================
 * WordPress API
 * ==========================
 */

// Получить список статей
export const fetchArticles = async () => {
  try {
    const res = await fetch(`${WP_API_URL}/wp/v2/posts`);
    if (!res.ok) throw new Error(`WP API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching WP articles:", error);
    return [];
  }
};

// Получить одну статью по ID
export const fetchArticleById = async (id) => {
  try {
    const res = await fetch(`${WP_API_URL}/wp/v2/posts/${id}`);
    if (!res.ok) throw new Error(`WP API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching WP article:", error);
    return null;
  }
};

/**
 * ==========================
 * Node.js API
 * ==========================
 */

// Получить список продуктов
export const fetchProducts = async () => {
  try {
    const res = await fetch(`${NODE_API_URL}/products`);
    if (!res.ok) throw new Error(`Node API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching Node products:", error);
    return [];
  }
};

// Получить один продукт по ID
export const fetchProductById = async (id) => {
  try {
    const res = await fetch(`${NODE_API_URL}/products/${id}`);
    if (!res.ok) throw new Error(`Node API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching Node product:", error);
    return null;
  }
};

// Получить данные SaaS
export const fetchSaaS = async () => {
  try {
    const res = await fetch(`${NODE_API_URL}/saas`);
    if (!res.ok) throw new Error(`Node API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching SaaS data:", error);
    return [];
  }
};

/**
 * ==========================
 * Экспорт общего API
 * ==========================
 */
export default {
  fetchArticles,
  fetchArticleById,
  fetchProducts,
  fetchProductById,
  fetchSaaS,
};
