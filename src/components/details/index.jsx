import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TYPES from '../../redux/types';
import { useParams } from 'react-router-dom';
import Loader from '../common/loader';

const Details = ({ movie, getMovie, isFetching }) => {
    let { movieID } = useParams();
    useEffect(() => {
        getMovie(movieID)
    }, [])

    if (isFetching) {
        return (
            <Loader />
        )
    }

    if (movie) {
        return (

            <div className="item-details">
                <div className="item-detail-img">
                    <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}/w1280${movie.backdrop_path}`} alt="" />
                </div>
                <div className="item-detail-info">
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <div className="item-genres">
                        <h3>Genres:</h3>
                        {movie.genres.map(genre => <p>{genre.name}</p>)}
                    </div>
                    <span><b>Status:</b> {movie.status}</span>
                    <span><b>Runtime:</b> {movie.runtime}</span>
                    <span><b>Revenue:</b> {movie.revenue}</span>
                    <span><b>Release Date:</b> {movie.release_date}</span>
                </div>
            </div>

        )
    }
    else { return <h1>Not Found</h1> }
}

const mapStateToProps = state => ({
    movie: state.movies.selected,
    isFetching: state.movies.isFetching
});

const mapDispatchToProps = dispatch => ({
    getMovie: data =>
        dispatch({ type: TYPES.MOVIE.REQUEST, id: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);