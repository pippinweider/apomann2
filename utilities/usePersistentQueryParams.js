import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const usePersistentQueryParams = () => {
  const router = useRouter();
  const [queries, setQueries] = useState(() => {
    const storedQueries = localStorage.getItem("queries");
    return storedQueries ? JSON.parse(storedQueries) : router.query;
  });
  console.log(router.query);

  useEffect(() => {
    setQueries(router.query);
  }, [router.query]);

  useEffect(() => {
    localStorage.setItem("queries", JSON.stringify(queries));
  }, [queries]);

  const navigateWithPersistedParams = (newPathname, newQueryParams = {}) => {
    const mergedQueries = { ...queries, ...newQueryParams };
    router.push({
      pathname: newPathname,
      query: mergedQueries,
    });
    setQueries(mergedQueries);
  };

  return {
    queries,
    navigateWithPersistedParams,
  };
};
