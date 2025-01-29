import { getUserMock } from "./mocks/user.jsx";
import { getActivityMock } from "./mocks/activity.jsx";
import { getAverageSessionsMock } from "./mocks/averageSessions.jsx";
import { getPerformanceMock } from "./mocks/performance.jsx";
import { getScoreMock } from "./mocks/score.jsx";

import { getUser } from "./api/user.jsx";
import { getActivity } from "./api/activity.jsx";
import { getAverageSessions } from "./api/averageSessions.jsx";
import { getPerformance } from "./api/performance.jsx";
import { getScore } from "./api/score.jsx";

const useMockData = true; 

export const fetchUser = async (id) => useMockData ? getUserMock(id) : getUser(id);
export const fetchUserActivity = async (id) => useMockData ? getActivityMock(id) : getActivity(id);
export const fetchUserAverageSessions = async (id) => useMockData ? getAverageSessionsMock(id) : getAverageSessions(id);
export const fetchUserPerformance = async (id) => useMockData ? getPerformanceMock(id) : getPerformance(id);
export const fetchUserScore = async (id) => useMockData ? getScoreMock(id) : getScore(id);