import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import TYPES from "../../redux/types";
import useDebounce from "../../hooks/useDebounce";
import { useHistory, useLocation } from "react-router-dom";


const Search = props => {
  const { searchMovie, setSearchOpen, searchOpen } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  let history = useHistory();
  let location = useLocation();

  const handleClick = e => {
    if (searchTerm.length > 3) {
      searchMovie(searchTerm);
    }
  };

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen)
    // !searchOpen && history.push('/search')
  }

  useEffect(() => {
    handleClick()
    history.push('/search')
  }, [debouncedSearchTerm])

  useEffect(() => {
    if (location.pathname) {
      setSearchTerm("")
    }
  }, [location.pathname])

  return (
    <>
      <div className="search-modal">
        {
          searchOpen &&
          <>
            <div className="form-group">
              <label id="term-label" htmlFor="term" className="form-label">
                <input
                  name="term"
                  id="term"
                  className=""
                  type="search"
                  aria-label="Search"
                  placeholder="Enter Movie Name"
                  title="Enter Movie Name"
                  onChange={handleChange}
                  required
                />
                <i className="fa fa-search" aria-hidden="true"></i>
              </label>
            </div>
          </>
        }
        <button onClick={handleSearchClick} className="btn-search-toggle">
          {searchOpen ?
            <i className="fa fa-close" aria-hidden="true"></i> :
            <i className="fa fa-search" aria-hidden="true"></i>
          }
        </button>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  searchResult: state.search.searchResult,
  isLoading: state.search.isLoading,
  searchHistory: state.search.history,
});

const mapDispatchToProps = dispatch => ({
  searchMovie: data =>
    dispatch({ type: TYPES.SEARCH.REQUEST, searchTerm: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
