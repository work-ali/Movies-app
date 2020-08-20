import React, { useState } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from './components/homepage'
import Details from './components/details'
import axiosConfig from "./config/axiosConfig";
import MovieGrid from "./components/movieGrid/MovieGrid";
import NavBar from "./components/navbar";

axiosConfig()

function App(props) {
  let [searchOpen, setSearchOpen] = useState(false)
  let { searchResults } = props
  let { searching } = props

  return (
    <>
      <NavBar setSearchOpen={setSearchOpen} searchOpen={searchOpen} />
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Homepage searchOpen={searchOpen} />
          </Route>
          <Route exact path='/search'>
            <MovieGrid data={searchResults} searching={searching} />
          </Route>
          <Route path='/movie/:movieID'>
            <Details />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

const mapStateToProps = state => ({
  searchResults: state.search.searchResult,
  searching: state.search.isLoading,
});

export default connect(mapStateToProps, null)(App);
