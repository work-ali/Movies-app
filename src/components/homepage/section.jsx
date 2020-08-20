import React from 'react'
import Slider from '../common/slider'
import Card from '../common/Card'
import TYPES from '../../redux/types'
import { connect } from 'react-redux'

const Section = ({ title, data, favourites, setFavourite }) => {
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

    return (

        <div className="mb-100">
            <h2 className="sec-title">{title}</h2>
            <div id="itemsRow" className="items-row">
                <Slider>
                    {
                        data.map(item =>
                            <Card
                                item={item}
                                isFavourite={checkFavourite(item)}
                                title={item.title}
                                subtitle={item?.release_date?.split("-")[0]}
                                image={`${process.env.REACT_APP_IMAGE_BASE_URL}/w342${item.poster_path}`}
                                handleClick={() => setFavourite(item)}
                            />
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    favourites: state.favourites.list
});

const mapDispatchToProps = dispatch => ({
    setFavourite: data =>
        dispatch({ type: TYPES.FAVOURITE.TOGGLE, movie: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Section);