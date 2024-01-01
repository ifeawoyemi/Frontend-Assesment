import React, { useState, useEffect } from 'react';
import './banner.css';
import BgImg from '../../src/images/bg.png'
import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import PlayBtn from '../components/PlayBtn';

function Banner() {
    const [movies, setMovies] = useState([]);

    const fetchData = () => {
        fetch('https://m ovies-app.prakashsakari.repl.co/api/movies')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(e => console.log(e.message));   
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='banner'>
            <div className='movie'>
                <img src={BgImg} alt="Background Image" className='bgImg active' />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="col-lg-6 col-md-12 ">
                           <MovieContent/> 
                        </div>
                        <div className="col-lg-6 col-md-12 ">
                            <MovieDate/>
                            <PlayBtn/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner