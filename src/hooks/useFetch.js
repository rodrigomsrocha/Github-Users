import useSWR from "swr";

import api from "../services/api";

export function useFetch(url) {
  const { data, error } = useSWR(
    url,
    async (url) => {
      const { data } = await api(url);
      return data;
    },
    {
      shouldRetryOnError: false,
    }
  );

  return { data, error };
}
