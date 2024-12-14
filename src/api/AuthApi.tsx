const API_URL = import.meta.env.VITE_SERVER_API_URL;
const LOGIN_URL = `${API_URL}/auth/login`;
const REGISTER_URL = `${API_URL}/auth/register`;

export const registerUser = async (email: string, password: string) => {
  const response = await fetch(REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Error registering user');
  }

  return response;
};

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Error logging in user');
  }

  return response.json();
};