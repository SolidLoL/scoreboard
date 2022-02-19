import React, {useState} from 'react'


const Context = React.createContext({})

export function NavigationContextProvider ({children}) {
    const [openMenu, setopenMenu] = useState(false)
    const [search, setsearch] = useState(false)
  
    return <Context.Provider value={{
    openMenu,
    setopenMenu,
    search, 
    setsearch
    }}>
      {children}
    </Context.Provider>
  }
  
  export default Context