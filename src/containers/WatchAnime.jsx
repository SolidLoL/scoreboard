import React, { useContext, useEffect } from "react";
import { useParams} from "react-router-dom";
import { Spinner } from "@components/Spinner";
import {VideoPlayer} from "@components/VideoPlayer"
import useCapitule from "@hooks/useCapitule";

const WhatchAnime = () => {
  const { id, episode } = useParams();
  //const { state } = ;
  // const [data, setData] = useState({});
  const storage = localStorage.getItem('capitule');
  const capitule = !(storage)? useCapitule(id,episode).shift() : JSON.parse(storage);
  
  return (
      <>
      { !capitule ? <Spinner /> : 
        <VideoPlayer video={capitule} />
       }
      </>
  );
};

export default WhatchAnime;
