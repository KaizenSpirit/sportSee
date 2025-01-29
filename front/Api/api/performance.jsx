const BASE_URL = 'http://localhost:3000';

export const getPerformance = async (userId) => {
  const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};