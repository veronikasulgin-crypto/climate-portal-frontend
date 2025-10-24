function UserDashboard({ user }) {
  return (
    <div>
      <h2>Личный кабинет: {user.role}</h2>
      <p>Доступные функции зависят от роли пользователя (селлер, издатель, обычный).</p>
      {/* Подключение к API для получения данных пользователя */}
    </div>
  );
}

export default UserDashboard;
