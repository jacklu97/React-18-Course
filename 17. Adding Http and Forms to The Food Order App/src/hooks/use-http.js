import { useCallback, useState } from "react";

const BACKED_ENDPOINT = "https://react-http-c1c44-default-rtdb.firebaseio.com/meals.json"

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, dataHandler) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url ?? BACKED_ENDPOINT, {
        method: requestConfig.method ?? "GET",
        headers: requestConfig.headers ?? {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request was not successful");
      }

      const data = await response.json();

      dataHandler(data);
    } catch (e) {
      setError(e.message || "There was an error on the fetch request");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
