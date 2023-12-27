import React, { useState, useEffect } from 'react';
import './banner.css';
import BgImg from '../../src/images/bg.png'

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
                            <div className="content">
                                <img src="" alt="Movie Title" className='movie-title' />
                                <h4>
                                    <span>Year</span>
                                    <span><i>age</i></span>
                                    <span>length</span>
                                    <span>Category</span>
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Dicta debitis iste quidem 
                                    mollitia enim impedit nostrum aliquam 
                                    reiciendis cumque dolor officia a, ratione 
                                    quae illo quasi voluptatibus facilis 
                                    consequuntur perferendis?
                                </p>
                                <div className='button' onClick={fetchData}>
                                    Button
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 ">
                            <div className='date'>
                                <h2>On 28th August 2023</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner