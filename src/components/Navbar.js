import React, { useState } from 'react'
// import clear from '../1.png'
// import night from '../2.png'
// import rain from '../3.png'

export default function Navbar(props) {
    const [searchLocation, setSearchLocation] = useState('');
    const handleSearch = (e) => {
        props.search(true)
        e.preventDefault();
        searchLocation.replace(/ /g, '+');
        props.location(searchLocation)
    }

    return (
        <div>
            <nav className={`navbar my-1 sticky-top navbar-${props.theme} navbar-expand-lg bg-transparent`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">BroWeatherBro</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Set Theme
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" onClick={() => { props.changeBg('clear'); props.setToggle(false) }}>Day</a></li>
                                    <li><a className="dropdown-item" onClick={() => { props.changeBg('night'); props.setToggle(false) }}>Night</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" onClick={() => { props.autoBg(); { props.toggle ? props.setToggle(false) : props.setToggle(true) } }}>Auto</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link  ${props.button ? 'fw-bold btn btn-outline-light' : 'disabled  '}`} >Contribute</button>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={handleSearch} role="search">
                            <input className="form-control me-2" placeholder='Enter a City Name' value={searchLocation} aria-label="Search" type='search' onChange={(e) => setSearchLocation(e.target.value)} />
                            <button className={`btn ${props.theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'}  `} type='submit'>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
