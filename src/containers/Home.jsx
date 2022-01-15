import React, { Fragment, useContext, useEffect } from "react";
import { FlyCard } from "@components/FlyCard";
import { AnimeList } from "@components/AnimeList";
import Context from "@context/AppContext";

export const Home = () => {
  const { animes, navigation, setnavigation } = useContext(Context);
  const selectFirstAnime =
    Object.entries(animes).length > 0 ? animes.animes[0] : {};
  useEffect(() => {
    if (!navigation) {
      setnavigation(true);
    }
  }, [navigation]);
  return (
    <Fragment>
      <FlyCard anime={selectFirstAnime} catalog={animes?.catalog} />
      <AnimeList animelist={animes?.animes} />
    </Fragment>
  );
};

//  export default Home;
