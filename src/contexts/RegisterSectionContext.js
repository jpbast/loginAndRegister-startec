import React, { createContext, useState } from 'react'

export const RegisterSectionContext = createContext()

export function RegisterSectionProvider({ children }) {
    const [registerSection, setRegisterSection] = useState(1)

    return (
        <RegisterSectionContext.Provider value={[registerSection, setRegisterSection]}>
            { children }
        </RegisterSectionContext.Provider>
    )
}