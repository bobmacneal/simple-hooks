import {useEffect, useState} from 'react';
import axios from 'axios';

export function useAxiosGet(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setError(false);
    setLoading(true);

    try {
      const response = await axios.get(url)
      setData(response.data)
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {data, loading, error}
}
