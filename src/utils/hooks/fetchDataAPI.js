import formatData from "../format/format";
import useFetch from "./useFetch";

export const useUserData = (id, isMockedData = false) => {
  const url = isMockedData
    ? `/assets/mockedData/user_main_data.json`
    : `http://localhost:3000/user/${id}`;
  const [fetchedData, loading, error] = useFetch(url);
  const data = isMockedData
    ? fetchedData?.find((user) => user.data.id === parseInt(id))
    : fetchedData;

  const formatModel = new formatData();
  const formatedData = data ? formatModel.formatScore(data) : data;

  return {
    userData: formatedData,
    userDataLoading: loading,
    userDataError: error,
  };
};
export const useUserActivity = (id, isMockedData = false) => {
  const url = isMockedData
    ? `/assets/mockedData/user_activity.json`
    : `http://localhost:3000/user/${id}/activity`;
  const [fetchedData, loading, error] = useFetch(url);
  const data = isMockedData
    ? fetchedData?.find((user) => user.data.userId === parseInt(id))
    : fetchedData;

  return {
    userActivity: data,
    userActivityLoading: loading,
    userActivityError: error,
  };
};

export const useUserPerformance = (id, isMockedData = false) => {
  const url = isMockedData
    ? `/assets/mockedData/user_performance.json`
    : `http://localhost:3000/user/${id}/performance`;

  const [fetchedData, loading, error] = useFetch(url);
  const data = isMockedData
    ? fetchedData?.find((user) => user.data.userId === parseInt(id))
    : fetchedData;

  const formatModel = new formatData();
  const formatedData = data ? formatModel.formatName(data) : data;

  return {
    userPerformance: formatedData,
    userPerformanceLoading: loading,
    userError: error,
  };
};

export const useUserAverageSessions = (id, isMockedData = false) => {
  const url = isMockedData
    ? `/assets/mockedData/user_average_session.json`
    : `http://localhost:3000/user/${id}/average-sessions`;

  const [fetchedData, loading, error] = useFetch(url);
  const data = isMockedData
    ? fetchedData?.find((user) => user.data.userId === parseInt(id))
    : fetchedData;

  const formatModel = new formatData();
  const formatedData = data ? formatModel.formatWeek(data) : data;

  return {
    userAverageSessions: formatedData,
    userAverageSessionsLoading: loading,
    userAverageSessionsError: error,
  };
};
