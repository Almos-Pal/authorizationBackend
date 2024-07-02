const API_BASE_URL = "http://localhost:3000";

export const endpoints = {
  login: `${API_BASE_URL}/auth/login`,
  logout: `${API_BASE_URL}/auth/logout`,
  register: `${API_BASE_URL}/auth/register`,
  users: `${API_BASE_URL}/users`,
};
