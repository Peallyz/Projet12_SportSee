import { useState } from "react";
import useFetch from "./useFetch";
import { useEffect } from "react";

export const useUserData = (id, isMockedData = false) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = isMockedData
    ? `/assets/mockedData/user_main_data.json`
    : `http://localhost:3000/user/${id}`;

  const [fetchedData, fetchedLoading, fetchedError] = useFetch(url);

  useEffect(() => {
    setData(
      !isMockedData
        ? fetchedData
        : fetchedData.find((user) => user.data.id === id)
    );
    setLoading(fetchedLoading);
    setError(fetchedError);
  }, [fetchedData, fetchedLoading, fetchedError, id, isMockedData]);

  return [data, loading, error];
};

export const useUserActivity = (id, isMockedData = false) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = isMockedData
    ? `/assets/mockedData/user_activity.json`
    : `http://localhost:3000/user/${id}/activity`;

  const [fetchedData, fetchedLoading, fetchedError] = useFetch(url);

  useEffect(() => {
    setData(
      !isMockedData
        ? fetchedData
        : fetchedData.find((user) => user.data.userId === id)
    );
    setLoading(fetchedLoading);
    setError(fetchedError);
  }, [fetchedData, fetchedLoading, fetchedError, isMockedData, id]);

  return [data, loading, error];
};

export const useUserPerformance = (id, isMockedData = false) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = isMockedData
    ? `/assets/mockedData/user_performance.json`
    : `http://localhost:3000/user/${id}/performance`;

  const [fetchedData, fetchedLoading, fetchedError] = useFetch(url);

  useEffect(() => {
    setData(
      !isMockedData
        ? fetchedData
        : fetchedData.find((user) => user.data.userId === id)
    );
    setLoading(fetchedLoading);
    setError(fetchedError);
  }, [fetchedData, fetchedLoading, fetchedError, id, isMockedData]);

  return [data, loading, error];
};

export const useUserAverageSessions = (id, isMockedData = false) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = isMockedData
    ? `/assets/mockedData/user_average_session.json`
    : `http://localhost:3000/user/${id}/average-sessions`;

  const [fetchedData, fetchedLoading, fetchedError] = useFetch(url);

  useEffect(() => {
    setData(
      !isMockedData
        ? fetchedData
        : fetchedData.find((user) => user.data.userId === id)
    );
    setLoading(fetchedLoading);
    setError(fetchedError);
  }, [fetchedData, fetchedLoading, fetchedError, id, isMockedData]);

  return [data, loading, error];
};
