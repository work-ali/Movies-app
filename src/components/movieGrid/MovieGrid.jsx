import React from 'react'
import Card from '../common/Card'
import { connect } from 'react-redux'
import TYPES from '../../redux/types'
import Loader from '../common/loader'

const MovieGrid = ({ data, searching, favourites, setFavourite }) => {
    const checkFavourite = (item) => {

        const isPresent = (element) => element.id == item.id;

        let flag = favourites.findIndex(isPresent)

        if (flag === -1) {
            return false
        }
        else {
            return true
        }
    }

    if (searching) {
        return (
            <Loader />
        )
    }
    else {
        return (
            <div className="content">
                <div className="movie-grid">
                    <div className="content">
                        {
                            !data || data.length <= 0 ?
                                <div className="search-content">
                                    <h5>No Results Found</h5>
                                </div>
                                :
                                data.map(item =>
                                    <Card
                                        item={item}
                                        title={item.title}
                                        subtitle={item?.release_date?.split("-")[0]}
                                        image={`${process.env.REACT_APP_IMAGE_BASE_URL}/w342${item.poster_path}`}
                                        isFavourite={checkFavourite(item)}
                                        handleClick={() => setFavourite(item)}
                                    />
                                )
                        }
                    </div>

                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    favourites: state.favourites.list
});

const mapDispatchToProps = dispatch => ({
    setFavourite: data =>
        dispatch({ type: TYPES.FAVOURITE.TOGGLE, movie: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);