import { useState, useEffect } from "react";
import { useRequestRetry } from "./useRequestRetry";

export default function useAsync(handler: any, immediate = false, retry = false) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const act = async (...args: any) => {
    setLoading(true);
    setError(null);

    if (retry === true) {
      const response = (await useRequestRetry(handler(...args), {
        retries: 2,
        minTimeout: 500,
      })) as any;

      if (response.success === false) {
        setLoading(false);
        setError(response.error);
        return response.error;
      }

      setLoading(false);
      setData(response.data);
      return response.data;
    }

    if (retry === false) {
      try {
        const data = await handler(...args);
        setData(data);
        setLoading(false);
        return data;
      }
      catch (err) {
        setError(err as null);
        setLoading(false);
        throw err;
      }
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }
  }, []);

  return {
    data,
    loading,
    error,
    act,
  };
}
