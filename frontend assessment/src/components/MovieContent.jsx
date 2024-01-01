import React from 'react';
import Button from './Button';
import './movieContent.css';

function MovieContent() {
    return (
        <div className="content active">
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
            <div className='button' >
                <Button
                    icon={<ion-Icon name="play-outline"></ion-Icon>}
                    name='book'
                    color='#ff3700'
                    bgColor='#fff'
                />
                <Button
                    icon={<ion-icon name='add-outline'></ion-icon>}
                    name='My List'
                />
            </div>
        </div>
    )
}

export default MovieContent