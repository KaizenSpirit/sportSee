import { USER_MAIN_DATA } from "../../src/mocks/mockData";

export const getScoreMock = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USER_MAIN_DATA.find(user => user.id === Number(id));
      if (user) {
        const score = user.todayScore || user.score; // Choisir la bonne propriété
        if (score !== undefined) { // Vérifier si le score existe
          resolve({ data: { score } }); // Encapsuler le score dans un objet { data: { score } }
        } else {
          reject(new Error('No score found for the given userId'));
        }
      } else {
        reject(new Error('No user found for the given userId'));
      }
    }, 500);
  });
};