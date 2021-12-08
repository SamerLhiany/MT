import React from 'react';
import { Link,Redirect } from 'react-router-dom';

import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import { category, movieType, tvType } from '../api/tmdbApi';
	// Redirect if logged in

const Home = ({
	component: Component,
	auth: { isAuthenticated, loading },
	...rest
}) => {
    if (!isAuthenticated) {
		return <Redirect to="/login" />;
	}
    return (
        <>
            <HeroSlide/>
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </>
    );
}


Home.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default  connect(mapStateToProps)(Home);
