import { USER_PERFORMANCE } from "../../src/mocks/mockData";

export const getPerformanceMock = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = USER_PERFORMANCE.find(perf => perf.userId === Number(id));
      if (data) {
        resolve({ data }); // Encapsuler les données
      } else {
        reject(new Error('No data found for the given userId'));
      }
    }, 500);
  });
};