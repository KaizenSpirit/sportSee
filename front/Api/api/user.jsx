const BASE_URL = 'http://localhost:3000';

export const getUser = async (userId) => {
  console.log('data from http request')
  const response = await fetch(`${BASE_URL}/user/${userId}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};