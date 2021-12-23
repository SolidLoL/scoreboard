import React, { Fragment, useContext,useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "@components/Loading";
import { AppContext } from "@context/AppContext";
import { AnimeInfo } from "@components/AnimeInfo";
import { ListOfCapitules } from "@components/ListOfCapitules";

const Anime = () => {
  const [data, setData] = useState({})
  const params = useParams();
  const {animes, sources} = useContext(AppContext);

  useEffect(() => {
    if (animes) {
      animes.find((a)=>{
        if (a.id == params.id) {
          a.sources = {
            id: a.id,
            locale: sources[0]["i18n"],
            source: sources[0].name,
          }
          setData(a)
        }
      })
    }
  }, [setData])

  // Busca si se encuentra el anime en el context si no se encuentra tendria que buscarlo en el API con useAnime info({params=[ id del anime]})


  return (
    <Fragment>
      {Object.entries(data).length > 0 ? (
        <Fragment>
          <AnimeInfo data={data} />
          <ListOfCapitules {...data} />
        </Fragment>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
  return (<></>);
};

export default Anime;
