import useFetch from "./useFetch";

export const useUserData = (id, isMockedData = false) => {
  const url = isMockedData
    ? `/assets/mockedData/user_main_data.json`
    : `http://localhost:3000/user/${id}`;
  const [fetchedData, loading, error] = useFetch(url);
  const data = fetchedData?.find((user) => user.data.id === id);

  return [data, loading, error];
};
export const useUserActivity = (id, isMockedData = false) => {
  const url = isMockedData
    ? `/assets/mockedData/user_activity.json`
    : `http://localhost:3000/user/${id}/activity`;
  const [fetchedData, loading, error] = useFetch(url);
  const data = fetchedData?.find((user) => user.data.userId === id);

  return [data, loading, error];
};

export const useUserPerformance = (id, isMockedData = false) => {
  const url = isMockedData
    ? `/assets/mockedData/user_performance.json`
    : `http://localhost:3000/user/${id}/performance`;

  const [fetchedData, loading, error] = useFetch(url);
  const data = fetchedData?.find((user) => user.data.userId === id);

  return [data, loading, error];
};

export const useUserAverageSessions = (id, isMockedData = false) => {
  const url = isMockedData
    ? `/assets/mockedData/user_average_session.json`
    : `http://localhost:3000/user/${id}/average-sessions`;

  const [fetchedData, loading, error] = useFetch(url);
  const data = fetchedData?.find((user) => user.data.userId === id);

  return [data, loading, error];
};
