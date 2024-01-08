import React from 'react'
import Weather from './Weather'
export default function Temperature(props) {
    return (
        <>
        
        <div className='container d-flex'>
            <div className= {`card text-${props.theme === 'light' ? 'dark' : 'white'} bg-transparent border-0 container p-auto  mt-0`}>
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="temp mt-0 mb-0 pb-0 text-center fw-bold">{props.temp}</h1>
                        <h3 className='mt-0 pt-0 '>°celsius</h3>
                    </div>
                    <div className="d-flex mt-5 flex-column align-items-center">
                        <h1 className='text-capitalize fw-bolder '>{props.city}{props.country? ', '+props.country : ''}</h1>
                        <h5 className='text-capitalize mt-2 fw-bolder  '>{props.description}</h5>
                    </div>
            </div>
        </div>
        <Weather theme={props.theme} minMax={props.minMax} feelsLike={props.feelsLike} pressure={props.pressure} humidity={props.humidity} description={props.description} main={props.main} />
        </>
    )
}
