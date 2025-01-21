const BASE_URL = 'http://localhost:3000';

// Generic function to fetch data

export const fetchData = async (endpoint,id) => {
  const response = await fetch(`${BASE_URL}/user/${id}${endpoint}`);
  if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données : ${response.statusText}'); 
  }
  return await response.json();
};

// Spécific functions for each user data
export const fetchUser = async (id) => fetchData('', id);
export const fetchUserActivity = async (id) => fetchData('/activity', id);
export const fetchUserAverageSessions = async (id) => fetchData('/average-sessions', id);
export const fetchUserPerformance = async (id) => fetchData('/performance', id);
export const fetchUserScore = async (id) => fetchData('', id);