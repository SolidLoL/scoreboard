import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "@components/Spinner";
import { VideoPlayer } from "@components/VideoPlayer";
import Context from "@context/AppContext";
import useCapitule from "@hooks/useCapitule";

const useSearchAnimeById = (listofCapitules, id) => {
  const [result, setresult] = useState({});

  useEffect(() => {
    if (listofCapitules) {
      listofCapitules.find((a) => {
        if (a.number == id) {
          setresult(a);
        }
      });
    }
  }, []);
  return result;
};

const WhatchAnime = () => {
  const { id, episode } = useParams();
  const { capitules } = useContext(Context);
  const selectedEpisode = useSearchAnimeById(capitules, episode);

  console.log(selectedEpisode);

  return (
    <>
      {!selectedEpisode ? <Spinner /> : <VideoPlayer video={selectedEpisode} />}
    </>
  );
};

export default WhatchAnime;
