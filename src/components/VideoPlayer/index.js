import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import "./style.scss";

export const VideoPlayer = ({ video }) => {
    const [play, setplay] = useState(false)
    const divStyle = {
        zIndex: 9,
        top: 0,
        position: "fixed",

    };

    const ControllzVideoPlayer = ({ props }) => {
        console.log(props)
        const { video, title, number } = props;
        return (
            <div className='controlls d-flex flex-column w-100 position-absolute'>
                <div className='duration'></div>
                <div className='play-controlls d-flex flex-row justify-content-around'>
                    <div className='capitule d-flex flex-row justify-content-evenly align-items-center'>
                    <div className='time-lapse'>00:00</div>
                    <div className='episode-info'>
                        <div className='name'>{title ? title : "titulo no disponible"}</div>
                        <div className='number'>{`capitulo ${number}`}</div>
                    </div>
                    </div>
                    <div className='buttons d-flex flex-row justify-content-between align-items-center'>
                        <div className='re-init d-none d-lg-block'>
                            <span className="material-icons">
                                replay
                            </span>
                        </div>
                        <div className='rewind'>
                            <span className="material-icons">
                                fast_rewind
                            </span>
                        </div>
                        <div className='play'>
                            <span className="material-icons">
                                {play ? `pause` : `play_arrow`}
                            </span>
                        </div>
                        <div className='forward'>
                            <span className="material-icons">
                                fast_forward
                            </span>
                        </div>
                    </div>
                    <div className='overall-settings d-flex flex-row justify-content-evenly align-items-center'>
                        <div className='list-capitules'>
                            <span className="material-icons">
                                video_library
                            </span>
                        </div>
                        <div className='volumen'>
                            <span className="material-icons">
                                volume_up
                            </span>
                        </div>
                        <div className='subtitles'>
                            <span className="material-icons">
                                translate
                            </span>
                        </div>
                        <div className='full-view'>
                            00:00
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    console.log("----------------------> Video <---------------")
    console.log(video)
    console.log(Object.entries(ReactPlayer))
    console.log("----------------------> Video <---------------")
    const handlePlay = () => {
        setplay(!play);
    }
    return (
        <div className='player-wraper'>
            <ReactPlayer url={`${video.video}`} width={"100vw"} height={"100vh"} style={divStyle} playing={play} />
            <ControllzVideoPlayer props={video} />
        </div>
    );

}
