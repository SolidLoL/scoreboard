import React, {useState} from 'react'


const Context = React.createContext({})

export function NavigationContextProvider ({children}) {
    const [openMenu, setopenMenu] = useState(false)
    const [search, setsearch] = useState(false)
    const [visibility, setvisibility] = useState(false);
  
    return <Context.Provider value={{
    openMenu,
    setopenMenu,
    search, 
    setsearch,
    visibility,
    setvisibility
    }}>
      {children}
    </Context.Provider>
  }
  
  export default Context