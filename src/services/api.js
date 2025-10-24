// frontend/src/services/api.js

// Базовый URL для API: берем из переменной окружения, иначе localhost
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// ==================== Товары ====================
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error('Ошибка загрузки товаров');
    return await response.json();
  } catch (error) {
    console.error('Ошибка API fetchProducts:', error);
    return [];
  }
};

// ==================== Партнерские товары ====================
export const fetchPartners = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/partners`);
    if (!response.ok) throw new Error('Ошибка загрузки партнёров');
    return await response.json();
  } catch (error) {
    console.error('Ошибка API fetchPartners:', error);
    return [];
  }
};

// ==================== SaaS ====================
export const fetchSaaS = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/saas`);
    if (!response.ok) throw new Error('Ошибка загрузки SaaS');
    return await response.json();
  } catch (error) {
    console.error('Ошибка API fetchSaaS:', error);
    return [];
  }
};

// ==================== Статьи ====================
export const fetchArticles = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles`);
    if (!response.ok) throw new Error('Ошибка загрузки статей');
    return await response.json();
  } catch (error) {
    console.error('Ошибка API fetchArticles:', error);
    return [];
  }
};

// ==================== Данные пользователя ====================
export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    if (!response.ok) throw new Error('Ошибка загрузки пользователя');
    return await response.json();
  } catch (error) {
    console.error('Ошибка API fetchUserData:', error);
    return null;
  }
};
