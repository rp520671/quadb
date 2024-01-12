import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BookingForm from "../Components/BookingForm";
import MovieSummary from "../Components/MovieSummary";

const MovieBookingPage = () => {
    const { state } = useLocation();
    console.log("Movie data from useLocation", state);
    const { movie } = state;

    return (
        <Container>
            <Row>
                <Col>
                    <MovieSummary
                        name={movie.show.name}
                        summary={movie.show.summary}
                        img={movie.show.image.original}
                    />
                </Col>
                <Col className="bookingForm">
                    <BookingForm name={movie.show.name} />
                </Col>
            </Row>
        </Container>
    );
};

export default MovieBookingPage;
