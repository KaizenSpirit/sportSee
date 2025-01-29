import { USER_ACTIVITY } from "../../src/mocks/mockData";

export const getActivityMock = async (id) => {
  return new Promise((resolve, reject) => {
    console.log('mocked data')
    setTimeout(() => {
      const data = USER_ACTIVITY.find(act => act.userId === Number(id));
      if (data) {
        resolve({ data }); // Encapsuler les données
      } else {
        reject(new Error('No data found for the given userId'));
      }
    }, 500);
  });
};