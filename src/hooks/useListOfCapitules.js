import { useEffect, useState } from "react";
import axios from "axios";

const useListOfCapitules = (source, id) => {

  const [loading, setLoading] = useState(false);
  const [listOfCapitules, setlistOfCapitules] = useState({});

  if (Object.entries(source).length > 0) {
    const API = `https://api.aniapi.com/v1/episode?anime_id=${id}&source=${source.name}&locale=${source.i18n}&page=1&per_page=10`;

    useEffect(async () => {
      setLoading(true);
      const responseAPI = await axios(API);
      const response = responseAPI.data?.data?.documents || {};

      if (Object.entries(response).length > 0) {
        setlistOfCapitules(response);
      }

    }, []);

  }
  return { listOfCapitules, loading };

}

export default useListOfCapitules;