import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../Components/MovieCard";

const url = "https://api.tvmaze.com/search/shows?q=all"

const getMovies = async () => {
    try {
        const response = await axios.get(url)
        console.log('response:-', response);
        return response.data
    } catch (error) {
        console.log('error while getting movies:-', error);
    }
}

const MoviesPage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies().then((data) => {
            setMovies(data)
        })
    }, [])

    console.log("MoviesPage Component:-", movies);

    return (
        <Container>
            <Row>
                {movies.map((movie) => (
                    <Col key={movie.show.id} className="mt-4">
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default MoviesPage;