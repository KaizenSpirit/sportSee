import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../src/mocks/mockData.jsx";

const BASE_URL = 'http://localhost:3000';
const useMockData = true; 

const dataMap = {
  "": USER_MAIN_DATA,
  "/activity": USER_ACTIVITY,
  "/average-sessions": USER_AVERAGE_SESSIONS,
  "/performance": USER_PERFORMANCE
};

// Fonction générique pour gérer les mocks
const fetchMockData = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data }), 500); 
  });
};

const fetchData = async (endpoint, id) => {
  const data = useMockData 
    ? (() => {
        const mappedData = dataMap[endpoint];
        if (!mappedData) throw new Error("Invalid endpoint");
        return mappedData.find((item) =>
          (item.userId && item.userId === Number(id)) || 
          (item.id && item.id === Number(id))
        );
      })() 
    : await fetch(`${BASE_URL}/user/${id}${endpoint}`).then((res) => {
        if (!res.ok) throw new Error(`Erreur : ${res.statusText}`);
        return res.json();
      });

  if (!data) throw new Error("User not found");
  return useMockData ? fetchMockData(data) : data;
};

// Spécific functions for each user data
export const fetchUser = async (id) => fetchData('', id);
export const fetchUserActivity = async (id) => fetchData('/activity', id);
export const fetchUserAverageSessions = async (id) => fetchData('/average-sessions', id);
export const fetchUserPerformance = async (id) => fetchData('/performance', id);
export const fetchUserScore = async (id) => fetchData('', id);