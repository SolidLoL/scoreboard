import React, { useState, useEffect, useMemo } from 'react'

const Context = React.createContext({})

export function AppContext({ children, initialState }) {
    const [animes, setanimes] = useState({});
    const [navigation, setnavigation] = useState(true);
    const [selectedAnime, setselectedAnime] = useState({});
    const [capitules, setcapitules] = useState({})

    useEffect(() => {
        setanimes(initialState)
    }, [initialState])


    return <Context.Provider value={{ animes, setanimes, navigation, setnavigation, selectedAnime, setselectedAnime, capitules, setcapitules }}>
        {children}
    </Context.Provider>
}

export default Context
