import React from 'react'

export default function Weather(props) {

    return (
        <>
            <div className="container">
                <div className="row my-5 ">
                    <div className="col-md-3 mt-3 ">
                        <div className={`card border-0  ${props.theme === 'light' ? '' : 'card-blur'}  text-${props.theme === 'light' ? 'dark' : 'white'} bg-transparent`} id='card' >
                            <div className="card-body">
                                <h5 className="card-title text-center fw-bolder ">Feels Like</h5>
                                <h1 className="card-text mb-0 pb-0  text-center fw-bolder ">{props.feelsLike}</h1>
                                <h6 className='mt-0 pt-0 text-center fw-medium '>°celsius</h6>
                                <p className='text-center fw-medium '></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3 ">
                        <div className={`card border-0  ${props.theme === 'light' ? '' : 'card-blur'}  text-${props.theme === 'light' ? 'dark' : 'white'} bg-transparent`} id='card' >
                            <div className="card-body">
                                <h5 className="card-title text-center fw-bolder ">Min / Max</h5>
                                <h1 className="card-text mb-0 pb-0  text-center fw-bolder ">{props.minMax}</h1>
                                <h6 className='mt-0 pt-0 text-center fw-medium '>°celsius</h6>
                                <p className='text-center fw-medium '></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3 ">
                        <div className={`card border-0  ${props.theme === 'light' ? '' : 'card-blur'}  text-${props.theme === 'light' ? 'dark' : 'white'} bg-transparent`} id='card' >
                            <div className="card-body">
                                <h5 className="card-title text-center fw-bolder ">Humidity</h5>
                                <h1 className="card-text mb-0 pb-0  text-center fw-bolder ">{props.humidity}</h1>
                                <h6 className='mt-0 pt-0 text-center fw-medium '>Percent</h6>
                                <p className='text-center fw-medium '></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3 ">
                        <div className={`card border-0  ${props.theme === 'light' ? '' : 'card-blur'}  text-${props.theme === 'light' ? 'dark' : 'white'} bg-transparent`} id='card' >
                            <div className="card-body">
                                <h5 className="card-title text-center fw-bolder ">Pressure</h5>
                                <h1 className="card-text mb-0 pb-0  text-center fw-bolder ">{props.pressure}</h1>
                                <h6 className='mt-0 pt-0 text-center fw-medium '>hPa</h6>
                                <p className='text-center fw-medium '></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
