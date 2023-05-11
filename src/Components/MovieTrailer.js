import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieTrailer = ({ movies }) => {
    const { title } = useParams()
    const movie = movies.find(elem => elem.title === title)
    return (
        <div>
            <Link to="/">
                <button variant="contained">Go Home</button>
            </Link>
            <h1>Title: {movie.title}</h1>
            <h5>description: {movie.description}</h5>
            <iframe width="560" height="315" 
            src={`https://www.youtube.com/embed/${movie.trailer}`} 
            title="YouTube video player" frameborder="0" 
            ></iframe>
        </div>
    )
}

export default MovieTrailer