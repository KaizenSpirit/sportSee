import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../src/mocks/mockData.jsx";

const BASE_URL = 'http://localhost:3000';
const useMockData = false; 

// Fonction générique pour gérer les mocks
const fetchMockData = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data }), 500); 
  });
};

const fetchData = async (endpoint, id) => {
  if (useMockData) {
    console.log(`Fetching data from mock for endpoint: ${endpoint}, id: ${id}`);
    switch (endpoint) {
      case "": {
        const user = USER_MAIN_DATA.find((user) => user.id === Number(id));
        if (!user) throw new Error("User not found");
        return fetchMockData(user);
      }
      case "/activity": {
        const activity = USER_ACTIVITY.find((item) => item.userId === Number(id));
        if (!activity) throw new Error("Activity not found");
        return fetchMockData(activity);
      }
      case "/average-sessions": {
        const sessions = USER_AVERAGE_SESSIONS.find((item) => item.userId === Number(id));
        if (!sessions) throw new Error("Average sessions not found");
        return fetchMockData(sessions);
      }
      case "/performance": {
        const performance = USER_PERFORMANCE.find((item) => item.userId === Number(id));
        if (!performance) throw new Error("Performance data not found");
        return fetchMockData(performance);
      }
      default: {
        throw new Error("Invalid endpoint");
      }
    }
  } else {
    // Appel au backend
    const response = await fetch(`${BASE_URL}/user/${id}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des données : ${response.statusText}`);
    }
    return await response.json();
  }
};

// Spécific functions for each user data
export const fetchUser = async (id) => fetchData('', id);
export const fetchUserActivity = async (id) => fetchData('/activity', id);
export const fetchUserAverageSessions = async (id) => fetchData('/average-sessions', id);
export const fetchUserPerformance = async (id) => fetchData('/performance', id);
export const fetchUserScore = async (id) => fetchData('', id);