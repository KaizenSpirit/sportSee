import { USER_MAIN_DATA } from "../../src/mocks/mockData"; // Ajustez le chemin

export const getUserMock = async (id) => {
  return new Promise((resolve, reject) => {
    console.log('data from mocks data')
    setTimeout(() => {
      const data = USER_MAIN_DATA.find(user => user.id === Number(id));
      if (data) {
        resolve({ data });
      } else {
        reject(new Error('No data found for the given userId'));
      }
    }, 500);
  });
};