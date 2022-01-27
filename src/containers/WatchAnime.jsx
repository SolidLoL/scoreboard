import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "@components/Spinner";
import { VideoPlayer } from "@components/VideoPlayer";
import Context from "@context/AppContext";
import useCapitule from "@hooks/useCapitule";

const useSearchAnimeById = (listofCapitules, episode, id) => {
  const [result, setresult] = useState({});
  useEffect(() => {
    if (Object.entries(listofCapitules).length > 0) {
      listofCapitules.find((a) => {
        if (a.number == episode) {
          setresult(a);
        }
      });
    }
  }, [listofCapitules]);
  return result;
};

const WhatchAnime = () => {
  const { id, episode } = useParams();
  const { capitules } = useContext(Context);
  const selectedEpisode = capitules
    ? useSearchAnimeById(capitules, episode, id)
    : useCapitule(episode, id);

  return (
    <>
      {Object.entries(selectedEpisode).length > 0 ? (
        <Spinner />
      ) : (
        <VideoPlayer video={selectedEpisode} />
      )}
    </>
  );
};

export default WhatchAnime;
