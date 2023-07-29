import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface schema<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string ) => {

  const [data, setData] = useState<T[]>([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<schema<T>>(endpoint,{signal :controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setErr(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  },[endpoint]);

  return { data, err, loading };
};

export default useData;
