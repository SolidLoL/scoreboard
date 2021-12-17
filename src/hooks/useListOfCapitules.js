import { useEffect, useState} from "react";
import axios from "axios";

const useListOfCapitules = (info) => {

    const [capitules, setcapitules] = useState([]);
    if(Object.entries(info).length > 0){
      const API = `https://api.aniapi.com/v1/episode?anime_id=${info.id}&source=${info.source}&locale=${info.locale}&page=1&per_page=10`;

      useEffect(async () => {
          const response = {capitules: {}};
          const responseAPI = await axios(API);
  
          //Asign data to response
          response.capitules= responseAPI.data?.data?.documents || {};
      
          //setcapitules(response.data);
          setcapitules(response);
        }, []);

    }
      return capitules;
    
}

export default  useListOfCapitules ;