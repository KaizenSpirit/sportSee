const BASE_URL = 'http://localhost:3000';

export const getScore = async (userId) => {
  const response = await fetch(`${BASE_URL}/user/${userId}`); // Même endpoint que pour getUser
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const userData = await response.json();
  const score = userData.todayScore || userData.score; // Choisir la bonne propriété
  if (score !== undefined) {
    return { data: { score } }; // Encapsuler le score
  } else {
    throw new Error('No score found for the given userId');
  }
};