import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
    const { movie } = props;
    const navigate = useNavigate();

    if (!movie || !movie.show) {
        return null;
    }

    const handleClick = () => {
        let movieId = movie.show.id;
        navigate(`/bookmovie/${movieId}`, { state: { movie } });
    };

    return (
        <>
            <Card style={{ width: '18rem' }}>
                {movie.show.image && movie.show.image.original && (
                    <Card.Img variant="top" src={movie.show.image.original} />
                )}
                <Card.Body>
                    <Card.Title>{movie.show.name}</Card.Title>
                    <Card.Text>
                        Language: {movie.show.language}
                        <br />
                        Status: {movie.show.status}
                    </Card.Text>
                    <Button variant="primary" onClick={handleClick}>
                        Show More
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default MovieCard;
