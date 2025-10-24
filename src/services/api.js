// frontend/src/services/api.js

// Базовый URL бэка из .env
const BASE_URL = process.env.REACT_APP_NODE_API_URL;

// --- Партнёрские товары ---
export const fetchPartners = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/partners`);
    if (!res.ok) throw new Error(`Ошибка API партнёра: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// --- SaaS инструменты ---
export const fetchSaaS = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/saas`);
    if (!res.ok) throw new Error(`Ошибка SaaS API: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// --- Мобильное приложение (данные/обновления) ---
export const fetchMobileApp = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/mobile-app`);
    if (!res.ok) throw new Error(`Ошибка Mobile API: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return {};
  }
};

// --- Личные кабинеты (селлеры, издатели, пользователи) ---
export const fetchUserDashboard = async (userId) => {
  try {
    const res = await fetch(`${BASE_URL}/api/users/${userId}`);
    if (!res.ok) throw new Error(`Ошибка User API: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// --- Общие статьи / блог ---
export const fetchArticles = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/articles`);
    if (!res.ok) throw new Error(`Ошибка Articles API: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
