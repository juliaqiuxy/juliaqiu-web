import { useState, useEffect, useCallback } from 'react';

const useApi = ({ fn }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    setLoading(true);

    try {
      const d = await fn();
      setData(d);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const reload = useCallback(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return [data, loading, error, reload];
};

export default useApi;
