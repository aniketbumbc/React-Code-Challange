import { useState, useEffect } from 'react';
import { URL } from 'src/constant/constant';
import { Animal } from 'src/types/types';
import { getErrorMessage } from 'src/utils/utilts';

export const useFetch = () => {
  const [animalsData, setAnimalsData] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL, {
          method: 'GET',
        });

        if (response.ok) {
          setLoading(false);
          response.json().then((data) => setAnimalsData(data.payload));
        } else {
          throw new Error(
            `Something Went Wrong, ${response.status} ${response.statusText}`
          );
        }
      } catch (error: unknown) {
        setLoading(false);
        console.error(error);
        setError(getErrorMessage(error));
      }
    };
    fetchData();
  }, []);

  return { animalsData, loading, error };
};
