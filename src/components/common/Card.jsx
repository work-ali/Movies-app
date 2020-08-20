import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item, title, subtitle, image, isFavourite, handleClick }) => {
    const onClick = (e) => {
        handleClick && handleClick()
    }

    return (
        <div className="item-content">
            <div className="item-img">
                <img src={image} alt="" />
                <button onClick={onClick} className="btn-fav">
                    <i className={`fa fa-star ${isFavourite ? "is-favourite" : ""}`} aria-hidden="true"></i>
                </button>
            </div>
            <Link to={`/movie/${item.id}`}>
                <div className="item-info">
                    <h4>{title}</h4>
                    <h6>{subtitle}</h6>
                </div>
            </Link>
        </div>
    )
}

export default Card