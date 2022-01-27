import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "@components/Spinner";
import { VideoPlayer } from "@components/VideoPlayer";
import Context from "@context/AppContext";
import useCapitule from "@hooks/useCapitule";

const useSearchAnimeById = (listofCapitules, episode) => {
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
  const [capitule, setcapitule] = useState({});
  const { episode } = useParams();
  const { capitules } = useContext(Context);
  const searchFromContext = useSearchAnimeById(capitules, episode);

  useEffect(() => {
    if (Object.entries(capitules).length > 0) {
      capitules.find((a) => {
        if (a.number == episode) {
          setcapitule(a);
        }
      });
    }
  }, [capitules]);

  return (
    <>
      {Object.entries(capitule).length > 0 ? (
        <VideoPlayer video={searchFromContext} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default WhatchAnime;
