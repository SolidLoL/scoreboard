import { useEffect, useState } from "react";
import axios from "axios";

const useListOfCapitules = (info) => {

  const [loading, setLoading] = useState(false);
  const [capitules, setcapitules] = useState({});
  if (Object.entries(info).length > 0) {
    const API = `https://api.aniapi.com/v1/episode?anime_id=${info.id}&source=${info.source}&locale=${info.locale}&page=1&per_page=10`;

    useEffect(async () => {
      setLoading(true);
      const responseAPI = await axios(API);
      const response = responseAPI.data?.data?.documents || {};

      //setcapitules(response.data);
      setcapitules(response);
    }, [setcapitules]);

  }
  return {capitules, loading};

}

export default useListOfCapitules;