import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "@components/Spinner";
import ReactPlayer from 'react-player';
import useCapitule from "@hooks/useCapitule";

const VideoPlayer = ({video}) => {
    console.log(video)
  /*   const [playerState, setPlayerState] = useState({
        isPlaying: false,
        progress: 0,
        speed: 1,
        isMuted: false,
      });
      const togglePlay = () => {
        setPlayerState({
          ...playerState,
          isPlaying: !playerState.isPlaying,
        });
      };
      useEffect(() => {
        playerState.isPlaying
          ? videoElement.current.play()
          : videoElement.current.pause();
      }, [playerState.isPlaying, videoElement]); */
      console.log(ReactPlayer.canPlay(video.video))

  return (
      <ReactPlayer url={`${video.video}`} />
  ); 
};
const WhatchAnime = () => {
  const { id, episode } = useParams();
  const [data, setData] = useState({});
  const cap = useCapitule(id,episode).shift();

    console.log(cap)
  return (
      <>
      { !cap ? <Spinner /> : 
        <VideoPlayer video={cap} />
      }
      </>
  );
};

export default WhatchAnime;
