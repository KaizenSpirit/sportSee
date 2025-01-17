const BASE_URL = 'http://localhost:3000';

export const fetchUser = async (id) => {
  const response = await fetch(`${BASE_URL}/user/${id}`);
  if (!response.ok) {
      throw new Error('Utilisateur introuvable'); 
  }
  return await response.json();
};

