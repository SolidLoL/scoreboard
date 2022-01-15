export const handlePlay = () => {
    console.log('onPlay')
    setoptions({
        ...state,
        playing: true
    });
}
export const load = url => {
    setoptions({
        ...options,
        url,
        played: 0,
        loaded: 0,
        pip: false
    })
}
export const handleToggleNavigate = () => {
    setoptions({ ...options, navigate: !options.navigate })
}
export const handlePlayPause = () => {
    setoptions({ ...options, playing: !options.playing })
}

export const handleStop = () => {
    setoptions({ ...options, url: null, playing: false })
}

export const handleToggleControls = () => {
    const url = options.url
    setoptions({
        ...options,
        controls: !options.controls,
        url: null
    }, () => load(url))
}

export const handleVolumeChange = e => {
    setoptions({ ...options, volume: parseFloat(e.target.value) })
}

export const handleToggleMuted = () => {
    setoptions({ ...options, muted: !options.muted })
}

export const handlePause = () => {
    console.log('onPause')
    setoptions({ ...options, playing: false })
}

export const handleSeekMouseDown = e => {
    setoptions({ ...options, seeking: true })
}
export const handleSeekChange = e => {
    setoptions({ ...options, played: parseFloat(e.target.value) })
}
const handleSeekMouseUp = e => {
    setoptions({ ...options, seeking: false })
    playerRef.current.seekTo(parseFloat(e.target.value))
}

export const handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    //if (!options.seeking) {
    setoptions({ ...options, state })
}
export const handleEnded = () => {
    console.log('onEnded')
    setoptions({ ...options, playing: options.loop })
}

export const handleDuration = (duration) => {
    console.log('onDuration', duration)
    setoptions({ ...options, duration })
}
export const TimeParser = (seconds = 0) => {
    let min = Math.floor(seconds / 60);
    min = (min < 10) ? '0' + min : min;
    let sec = Math.trunc(seconds % 60);
    sec = (sec < 10) ? '0' + sec : sec;

    /* console.log("minutes", min);
    console.log("seconds", sec); */
    return (seconds) ? `${min}:${sec}` : `00:00`
}
export const TimeRemain = (seconds = 0, duration = 0) => {
    const remain = Math.abs(seconds - duration);
    let min = Math.floor(remain / 60);
    min = (min < 10) ? '0' + min : min;
    let sec = Math.trunc(remain % 60);
    sec = (sec < 10) ? '0' + sec : sec;

    return `${min}:${sec}`;

}
export const handleClickFullscreen = () => {
    screenfull.request(findDOMNode(playerRef.current))
}