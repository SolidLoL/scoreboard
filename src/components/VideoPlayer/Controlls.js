import React from 'react'


/* cONTROLLS */
export const Controlls = ({ props, options, handlePlayPause }) => {
    console.log(options)
    const { title, number } = props;
    return (
        <div className='controlls d-flex flex-column w-100 position-absolute'>
            <div className='duration'>
                <input
                    type='range' min={0} max={0.999999} step='any'
                    className='form-range'
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
                    <div className='play' onClick={handlePlayPause}>
                        <span className="material-icons">
                            {options.playing ? `pause` : `play_arrow`}
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