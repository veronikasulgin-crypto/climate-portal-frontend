/// frontend/src/services/api.js

const API_BASE_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:5000'; // временно, пока не зальём бэк

// Получение товаров
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error('Ошибка загрузки товаров');
    return await response.json();
  } catch (error) {
    console.error('Ошибка API:', error);
    return [];
  }
};

// Получение партнёрских товаров
export const fetchPartners = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/partners`);
    if (!response.ok) throw new Error('Ошибка загрузки партнёров');
    return await response.json();
  } catch (error) {
    console.error('Ошибка API:', error);
    return [];
  }
};

// Получение SaaS-данных
export const fetchSaaS = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/saas`);
    if (!response.ok) throw new Error('Ошибка загрузки SaaS');
    return await response.json();
  } catch (error) {
    console.error('Ошибка API:', error);
    return [];
  }
};

// Получение данных пользователя
export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    if (!response.ok) throw new Error('Ошибка загрузки пользователя');
    return await response.json();
  } catch (error) {
    console.error('Ошибка API:', error);
    return null;
  }
};
