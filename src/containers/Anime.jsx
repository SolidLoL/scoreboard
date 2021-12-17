import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "@components/Loading";
import { AppContext } from "@context/AppContext";
import { AnimeInfo } from "@components/AnimeInfo";
import { ListOfCapitules } from "@components/ListOfCapitules";

const Anime = () => {
  // const navigate = useNavigate();
  const params = useParams();
  const animeContext = useContext(AppContext);
  const data = animeContext.animes.find((a) => {
    if (a.id == params.id) {
      console.log(a);
      return a;
    }
  });

  data.sources = {
    id: data.id,
    locale: animeContext.sources[0]["i18n"],
    source: animeContext.sources[0].name,
  };

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
};

export default Anime;
