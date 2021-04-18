import React, { createContext, useState } from 'react'

export const RegisterSectionContext = createContext()

export function RegisterSectionProvider({ children }) {
    const [registerSection, setRegisterSection] = useState(1)
    const [skills, setSkills] = useState([])
    const [minVal, setMinVal] = useState(8000);
    const [maxVal, setMaxVal] = useState(16000);

    return (
        <RegisterSectionContext.Provider 
          value={{
              section: [registerSection, setRegisterSection], 
              skill: [skills, setSkills],
              minValue: [minVal, setMinVal],
              maxValue: [maxVal, setMaxVal]
          }}
        >
            { children }
        </RegisterSectionContext.Provider>
    )
}