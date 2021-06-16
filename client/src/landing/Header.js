import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default Menu => (
    <Router>
        <header className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#343434' }}>
                <div className="container">
                    <Link className="navbar-brand" to={{ pathname: `/` }}>СумДУ E-Olymp студенти</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto mb-3 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={{ pathname: `/` }}>Головна</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={{ pathname: `/about-us` }}>Про нас</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.e-olymp.com/uk/" target="_blank">E-Olymp</a>
                            </li>
                        </ul>
                        <form action="#" className="d-flex">
                            <input className="form-control mr-3" type="search" placeholder="Пошук" />
                            <button className="btn btn-outline-dark" type="submit">Пошук</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    </Router>
);