import React, { useEffect } from 'react'
import Section from './section'
import { connect } from "react-redux";
import TYPES from "../../redux/types";

const Homepage = (props) => {
    let { getPopularMovies, getTopRated, getNowPlaying } = props
    let { popularMovies, topMovies, nowPlaying } = props

    useEffect(() => {
        getPopularMovies()
        getTopRated()
        getNowPlaying()
    }, [])

    return (
        <div>
            <Section
                title="See Popular"
                data={popularMovies}
            />
            <Section
                title="Top Rated"
                data={topMovies}
            />
            <Section
                title="Now Playing"
                data={nowPlaying}
            />
        </div>
    )
}

{/* , , or  */ }

const mapStateToProps = state => ({
    popularMovies: state.movies.popular,
    topMovies: state.movies.top,
    nowPlaying: state.movies.nowPlaying,
    isLoading: state.movies.isLoading,
});

const mapDispatchToProps = dispatch => ({
    getPopularMovies: data =>
        dispatch({ type: TYPES.POPULAR_MOVIES.REQUEST }),
    getTopRated: data =>
        dispatch({ type: TYPES.TOP_MOVIES.REQUEST }),
    getNowPlaying: data =>
        dispatch({ type: TYPES.NOW_PLAYING.REQUEST }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);