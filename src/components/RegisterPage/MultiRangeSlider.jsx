import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { RegisterSectionContext } from '../../contexts/RegisterSectionContext';

const SliderWrapper = styled.div`

    .slider {
      position: relative;
      width: 550px;
    }

    .slider__track,
    .slider__range {
      border-radius: 3px;
      height: 5px;
      position: absolute;
    }

    .slider__track {
      background-color: #ced4da;
      width: 100%;
      z-index: 1;
    }

    .slider__range {
      background-color: rgb(0, 0, 60);
      z-index: 2;
    }

    /* Removing the default appearance */
    .thumb,
    .thumb::-webkit-slider-thumb {
      -webkit-appearance: none;
    }

    .thumb {
      pointer-events: none;
      position: absolute;
      height: 0;
      width: 550px;
      outline: none;
    }

    /* Left and right thumbs */
    .thumb::-webkit-slider-thumb {
      background-color: #fcfcfc;
      /* border: 2px solid rgb(0, 0, 60); */
      border-radius: 50%;
      box-shadow: 0 0 1px 1px #ced4da;
      cursor: pointer;
      height: 1.5rem;
      width: 1.5rem;
      margin-top: 4px;
      pointer-events: all;
      position: relative;
    }

    .thumb--left::-webkit-slider-thumb {
      z-index: 3;
    }

    .thumb--right::-webkit-slider-thumb {
      z-index: 4;
    }

    .slider__left-value,
    .slider__right-value {
      color: black;
      font-size: 12px;
      margin-top: 20px;
      position: absolute;
    }

    .slider__left-value {
      left: 6px;
    }

    .slider__right-value {
      right: -4px;
    }

    @media screen and (max-width: 900px) {
        .slider, .thumb {
            width: 400px;
        }
    }

    @media screen and (max-width: 500px) {
        .slider, .thumb {
            width: 300px;
        }
    }
`

export default function MultiRangeSlider() {
    const { minValue, maxValue } = useContext(RegisterSectionContext);
    const [minVal, setMinVal] = minValue;
    const [maxVal, setMaxVal] = maxValue;
    const min = 0;
    const max = 16000;
    const range = useRef(null);

    useEffect(() => setLeftValue(), [minVal]);

    useEffect(() => setRightValue(), [maxVal]);

    // Convert to percentage
    const getPercent = value => Math.round(((value - min) / (max - min)) * 100);

    // Set width of the range to decrease from the left side
    const setLeftValue = () => {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);
      const val = minVal + minVal/2
      if (maxVal > val) {
        setMaxVal(Math.round(val))
      }

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    };

    // Set width of the range to decrease from the right side
    const setRightValue = () => {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);
      const val = maxVal*2/3
      if (maxVal > (minVal + minVal/2))
        setMinVal(Math.round(val))

      if (range.current) {
       range.current.style.width = `${maxPercent - minPercent}%`;
      }
    };

    return (
        <SliderWrapper>
            <input
              type="range"
              min={min}
              max={max}
              step="100"
              value={minVal}
              onChange={event => setMinVal(Math.min(event.target.value, maxVal - 1))}
              className="thumb thumb--left"
              style={{ zIndex: minVal > max - 100 && "5" }}
            />
                
            <input
              type="range"
              min={min}
              max={max}
              step="100"
              value={maxVal}
              onChange={event => setMaxVal(Math.max(event.target.value, minVal + 1))}
              className="thumb thumb--right"
            />
            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
            </div>
        </SliderWrapper>
    )
}