import React from 'react';
import Layout from '../Layout';
import { connect } from 'react-redux';
import TYPES from '../../redux/types';

const Details = ({ movie, getMovie }) => {

    useEffect(() => {
        getMovie()
    }, [])

    if (movie) {
        return (
            <Layout>
                <h3>{movie.title}</h3>
            </Layout>
        )
    }
    else { return null }
}

const mapStateToProps = state => ({
    movie: state.favourites.list
});

const mapDispatchToProps = dispatch => ({
    getMovie: data =>
        dispatch({ type: TYPES.MOVIE.TOGGLE, movie: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);