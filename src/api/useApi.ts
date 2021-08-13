import { useEffect, useState } from 'react';
import axios from 'axios';

/** General API Hook
 * It uses a simple axios request to retrieve data from graphql backend
 * I create it as a general hook for later on create custom-custom hooks ha!
 * (e.g. useTopHeadlines => This is the API used for the entire app)
 *
 */
export const useApi = (
  query: string,
): { error: null | Error; data: any; loading: boolean } => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:5000/graphiql',
      method: 'POST',
      data: {
        query,
      },
    })
      .then((resp) => {
        setData(resp.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [query]);

  return { error, data, loading };
};
