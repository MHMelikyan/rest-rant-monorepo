import { createContext, useState } from "react";
import { useState, useEffect } from 'react'

export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)
    
    useEffect(() => {

        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:3123/authentication/profile',
            { credentioals:'include'
        })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    },[])

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider