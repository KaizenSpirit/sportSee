import { USER_AVERAGE_SESSIONS } from "../../src/mocks/mockData";

export const getAverageSessionsMock = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = USER_AVERAGE_SESSIONS.find(session => session.userId === Number(id));
      if (data) {
        resolve({ data }); // Encapsuler les données
      } else {
        reject(new Error('No data found for the given userId'));
      }
    }, 500);
  });
};