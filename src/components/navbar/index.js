import React from 'react'
import SearchBar from '../search/index'
import { Link } from 'react-router-dom'

const NavBar = ({ setSearchOpen, searchOpen }) => {
    return (
        <header className="header">
            <div className="header-container">
                <nav className="header-nav">
                    <Link to='/'><h5>Home</h5></Link>
                    <SearchBar setSearchOpen={setSearchOpen} searchOpen={searchOpen} />
                </nav>
            </div>
        </header>
    )
}

export default NavBar
