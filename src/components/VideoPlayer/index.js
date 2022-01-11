import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import "./style.scss";

export const VideoPlayer = ({ video }) => {
    /* const divStyle = {
        zIndex: 9,
        top: 0,
        width: "100vh",
        height: "100vw",
        transformOrigin: "top",
        transform: "rotate(90deg)",
        position: "absolute",
        background: "black"
    }; */

    const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = useState({})
    const [orientation, setorientation] = useState(0)
    const [play, setplay] = useState(false);
    const navigate = useNavigate();
    const playerRef = useRef(null);
    const handleSeekMouseDown = e => {
        setplayed({ seeking: true })
    }
    const handleSeekChange = e => {
        setplayed({ played: parseFloat(e.target.value) })
    }
    const handleSeekMouseUp = e => {
        setplayed({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }
    /* cONTROLLS */
    const ControllzVideoPlayer = ({ props, player }) => {
        console.log(player)

        const handlePlay = () => {
            setplay(!play);
        }

        const { title, number } = props;
        return (
            <div className='controlls d-flex flex-column w-100 position-absolute'>
                <div className='duration'>
                    <input
                        type='range' min={0} max={0.999999} step='any'
                        value={played}
                        onMouseDown={handleSeekMouseDown}
                        onChange={handleSeekChange}
                        onMouseUp={handleSeekMouseUp}
                    />
                </div>
                <div className='play-controlls d-flex flex-row '>
                    <div className='capitule d-flex flex-row  align-items-center'>
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
                        <div className='play' onClick={handlePlay}>
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

    useEffect(() => {
        window.addEventListener("orientationchange", function () {
            const worient = screen.orientation;
            if (worient.angle != orientation) {
                setorientation(worient.angle)
            }
        }, false);
    }, [])

    console.log("----------------------> Video <---------------")
    console.log(playerRef)
    console.log("----------------------> Video <---------------")

    return (
        <div className='player-wraper'>
            <div className='back position-absolute w-100' >
                <div className='d-flex flex-row justify-content-start align-items-center p-3 '
                    onClick={() => { navigate(-1) }}>
                    <span className="material-icons">
                        arrow_back
                    </span>
                    <span>Back</span>
                </div>
            </div>
            <ReactPlayer ref={playerRef} className="player-react" url={`${video.video}`} width={orientation === 0 ? `100vw` : `100vh`} height={orientation === 0 ? `100vh` : `100vw`} playing={play} />
            <ControllzVideoPlayer props={video} />
        </div>
    );

}
