import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Controlls } from './Controlls';
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
        seeking: false
    })

    const [orientation, setorientation] = useState(0)
    //const [play, setplay] = useState(false);
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
        }, () => this.load(url))
    }

    const handleToggleLight = () => {
        setoptions({ ...options, light: !options.light })
    }

    const handleToggleLoop = () => {
        setoptions({ ...options, loop: !options.loop })
    }

    const handleVolumeChange = e => {
        setoptions({ ...options, volume: parseFloat(e.target.value) })
    }

    const handleToggleMuted = () => {
        setoptions({ ...options, muted: !options.muted })
    }

    const handleSetPlaybackRate = e => {
        setoptions({ ...options, playbackRate: parseFloat(e.target.value) })
    }

    const handleOnPlaybackRateChange = (speed) => {
        setoptions({ ...options, playbackRate: parseFloat(speed) })
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
        playerRef.seekTo(parseFloat(e.target.value))
    }

    const handleProgress = state => {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!options.seeking) {
            setoptions({ ...options, state })
        }
    }
    const handleEnded = () => {
        console.log('onEnded')
        setoptions({ ...options, playing: options.loop })
    }

    const handleDuration = (duration) => {
        console.log('onDuration', duration)
        setoptions({ ...options, duration })
    }

    const handleClickFullscreen = () => {
        screenfull.request(findDOMNode(playerRef))
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
            <ReactPlayer ref={playerRef} className="player-react" url={`${video.video}`} width={orientation === 0 ? `100vw` : `100vh`} height={orientation === 0 ? `100vh` : `100vw`} playing={options.playing}
                controls={options.controls}
                playbackRate={options.playbackRate}
                volume={options.volume}
                muted={options.muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                onPlay={handlePlay}
                onPause={handlePause}
                onBuffer={() => console.log('onBuffer')}
                onPlaybackRateChange={handleOnPlaybackRateChange}
                onSeek={e => console.log('onSeek', e)}
                onEnded={handleEnded}
                onError={e => console.log('onError', e)}
                onProgress={handleProgress}
                onDuration={handleDuration}
            />
            <Controlls
                props={video}
                options={options}
                handlePlay={handlePlayPause}
            />
        </div>
    );

}
