import React, { createContext, useEffect, useState } from 'react'

export const FurnishContext = createContext()

function FurnishContextProvider({children}) {
    let local = JSON.parse(localStorage.getItem("favorites"))
    let [fav,setFav] = useState(local ? local : [])

    useEffect(()=>{
        localStorage.setItem("favorites",JSON.stringify(fav))
    })

    const value = {
        fav,setFav
    }
  return (
    <FurnishContext.Provider value={value}>
      {children}
    </FurnishContext.Provider>
  )
}

export default FurnishContextProvider
