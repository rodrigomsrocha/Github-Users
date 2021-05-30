import useSWR from "swr";

export function useFetch(url) {
  const { data, error } = useSWR(url, async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  });

  return { data, error };
}
