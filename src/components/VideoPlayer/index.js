import React, { useState, useEffect, useRef, useCallback, useReducer } from 'react'
import { findDOMNode } from 'react-dom'
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Controlls } from './Controlls';
import screenfull from "screenfull";
import "./style.scss";

export const VideoPlayer = ({ video }) => {

    const [options, setoptions] = useState({
        url: null,
        pip: false,
        playing: false,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false,
        seeking: false,
        navigate: false
    })

    const [orientation, setorientation] = useState(0)
    const navigate = useNavigate();
    const playerRef = useRef(null);

    const handlePlay = () => {
        console.log('onPlay')
        setoptions({
            ...options,
            playing: true
        });
    }
    const load = url => {
        setoptions({
            ...options,
            url,
            played: 0,
            loaded: 0,
            pip: false
        })
    }
    const handleToggleNavigate = () => {
        setoptions({ ...options, navigate: !options.navigate })
    }
    const handlePlayPause = () => {
        setoptions({ ...options, playing: !options.playing })
    }

    const handleStop = () => {
        setoptions({ ...options, url: null, playing: false })
    }

    const handleToggleControls = () => {
        const url = options.url
        setoptions({
            ...options,
            controls: !options.controls,
            url: null
        }, () => load(url))
    }

    const handleVolumeChange = e => {
        setoptions({ ...options, volume: parseFloat(e.target.value) })
    }

    const handleToggleMuted = () => {
        setoptions({ ...options, muted: !options.muted })
    }

    const handlePause = () => {
        console.log('onPause')
        setoptions({ ...options, playing: false })
    }

    const handleSeekMouseDown = e => {
        setoptions({ ...options, seeking: true })
    }
    const handleSeekChange = e => {
        setoptions({ ...options, played: parseFloat(e.target.value) })
    }
    const handleSeekMouseUp = e => {
        setoptions({ ...options, seeking: false })
        playerRef.current.seekTo(parseFloat(e.target.value))
    }

    const handleProgress = state => {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        //if (!options.seeking) {
        setoptions({ ...options, state })
    }
    const handleEnded = () => {
        console.log('onEnded')
        setoptions({ ...options, playing: options.loop })
    }

    const handleDuration = (duration) => {
        console.log('onDuration', duration)
        setoptions({ ...options, duration })
    }
    const TimeParser = (seconds = 0) => {
        let min = Math.floor(seconds / 60);
        min = (min < 10) ? '0' + min : min;
        let sec = Math.trunc(seconds % 60);
        sec = (sec < 10) ? '0' + sec : sec;

        /* console.log("minutes", min);
        console.log("seconds", sec); */
        return (seconds) ? `${min}:${sec}` : `00:00`
    }
    const TimeRemain = (seconds = 0, duration = 0) => {
        const remain = Math.abs(seconds - duration);
        let min = Math.floor(remain / 60);
        min = (min < 10) ? '0' + min : min;
        let sec = Math.trunc(remain % 60);
        sec = (sec < 10) ? '0' + sec : sec;

        return `${min}:${sec}`;

    }
    const handleClickFullscreen = () => {
        screenfull.request(findDOMNode(playerRef.current))
    }

    useEffect(() => {
        window.addEventListener("orientationchange", function () {
            const worient = screen.orientation;
            if (worient.angle != orientation) {
                setorientation(worient.angle)
            }
        }, false);
    }, [])

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
            <ReactPlayer ref={playerRef} className="player-react" url={`${video.video}`} width={orientation === 0 ? `100vh` : `100vh`} height={orientation === 0 ? `100vw` : `100vw`} playing={options.playing}
                controls={options.controls}
                playbackRate={options.playbackRate}
                volume={options.volume}
                muted={options.muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                onPlay={handlePlay}
                onPause={handlePause}
                onBuffer={() => console.log('onBuffer')}
                onSeek={e => console.log('onSeek', e)}
                onEnded={handleEnded}
                onError={e => console.log('onError', e)}
                onProgress={handleProgress}
                onDuration={handleDuration}
            />
            <Controlls
                props={video}
                options={options}
                handlePlayPause={handlePlayPause}
                handleVolumeChange={handleVolumeChange}
                handleToggleNavigate={handleToggleNavigate}
                handleSeekMouseUp={handleSeekMouseUp}
                handleSeekChange={handleSeekChange}
                handleSeekMouseDown={handleSeekMouseDown}
                handleProgress={handleProgress}
                handleDuration={handleDuration}
                TimeParser={TimeParser}
                TimeRemain={TimeRemain}
            />
        </div>
    );

}
