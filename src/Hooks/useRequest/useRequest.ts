import { useState } from 'react';
import axios, { Method } from 'axios';
import { routeReplacer } from '../../Helpers/UrlHelpers';

interface UseRequestConfig {
  url: string;
  params?: { [x: string]: string | number };
  method?: Method
}

type DoRequest = (data?: any) => void

export const useRequest = <T>({url, params = {}, method = 'GET'}: UseRequestConfig) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const request: DoRequest = async (data) => {
    setLoading(true);
    const parsedUrl = routeReplacer(url, params);
    try {
      const resp = await axios({
        url: parsedUrl,
        method,
        data,
      });
      setResponse(resp.data as T);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {
    response,
    error,
    isLoading,
    // used to set the response based on another call for persistence without another api call
    setResponse,
    request,
  };
};
