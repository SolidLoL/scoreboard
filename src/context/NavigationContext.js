import React, {useState} from 'react'

const Context = React.createContext({})

export function NavigationContextProvider ({children}) {
    const [openMenu, setopenMenu] = useState(false)
  
    return <Context.Provider value={{
    openMenu,
    setopenMenu,
    }}>
      {children}
    </Context.Provider>
  }
  
  export default Context