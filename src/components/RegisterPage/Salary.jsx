import React, { useContext } from 'react'
import styled from 'styled-components'
import { RegisterSectionContext } from '../../contexts/RegisterSectionContext';
import MultiRangeSlider from './MultiRangeSlider';

const SalaryWrapper = styled.div`
    padding-bottom: 4rem;
    
    span {
        display: inline-block;
    }

    & > span {
        margin-top: 5rem;
        margin-bottom: 2rem;
    }

    div > span {
        font-size: 0.9rem;
        margin-bottom: 0.2rem;
    }

    .values-container {
        display: flex;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .value-box {
        background-color: white;
        padding: 1rem;
        width: 8rem;
    }
`

export default function Salary() {
    const { minValue, maxValue } = useContext(RegisterSectionContext)
    const [minVal, setMinVal] = minValue
    const [maxVal, setMaxVal] = maxValue

    return (
        <SalaryWrapper>
            <span>Pretensão salarial</span>
            <div className="values-container">
                <div>
                    <span>Mínimo</span>
                    <div className="value-box">
                        {`R$ ${minVal},00`}
                    </div>
                </div>
                <div>
                    <span>Máximo</span>
                    <div className="value-box">
                        {`R$ ${maxVal},00`}
                    </div>
                </div>
            </div>
            <MultiRangeSlider />
        </SalaryWrapper>
    )
}
