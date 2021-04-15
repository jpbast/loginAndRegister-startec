import React, { createContext, useState } from 'react'

export const LoginSectionContext = createContext()

export function LoginSectionProvider({ children }) {
    const [section, setSection] = useState(1);

    return (
        <LoginSectionContext.Provider value={[section, setSection]}>
            {children}
        </LoginSectionContext.Provider>
    )
}
