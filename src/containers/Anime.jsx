import React, { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Context from "@context/AppContext";
import { Loading } from "@components/Loading";
import { AnimeInfo } from "@components/AnimeInfo";
import useListOfCapitules from "@hooks/useListOfCapitules";
import { ListOfCapitules } from "@components/ListOfCapitules";

import useSearchAnime from "@hooks/useSearchAnime";

const Anime = () => {
  const { id } = useParams();
  const { animes, setselectedAnime, setnavigation, capitules, setcapitules } =
    useContext(Context);

  // Busca si se encuentra el anime en el context si no se encuentra tendria que buscarlo en el API con useAnime info({params=[ id del anime]})

  const animeInList = useSearchAnime(animes?.animes, id);
  const { listOfCapitules, loading } = useListOfCapitules(
    animes?.sources[0],
    id
  );

  useEffect(() => {
    setnavigation(false);
    setselectedAnime(animeInList);
    if (loading) {
      setcapitules(listOfCapitules);
    }
  }, [loading, listOfCapitules]);

  return (
    <Fragment>
      {loading ? (
        <>
          <AnimeInfo anime={animeInList} />
          <ListOfCapitules
            anime={animeInList}
            sources={animes?.sources}
            listOfCapitules={listOfCapitules}
          />
        </>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

export default Anime;
