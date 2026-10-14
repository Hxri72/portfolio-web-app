import { useEffect, useState } from "react";
import api from "../api/axios";

// small hook so every page doesn't repeat the same loading/error code
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(url);
        setData(res.data);
      } catch (err) {
        setError("Something went wrong. Please try again later.");
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
