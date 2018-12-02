import React from 'react';
import {Link} from 'gatsby';

const Header = () => (
    <div
        style={{
            background: 'rebeccapurple',
            marginBottom: '1.45rem',
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}

        >
            <div style={{display: 'flex'}}>
                <Link
                    to="/"
                    style={{
                        display: 'block',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    style={{
                        marginLeft: 15,
                        display: 'block',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    About
                </Link>
                <Link
                    to="/sections"
                    style={{
                        marginLeft: 15,
                        display: 'block',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    Sections
                </Link>
                <Link
                    to="/search"
                    style={{
                        marginLeft: 15,
                        display: 'block',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    Search
                </Link>
            </div>
        </div>
    </div>
);

export default Header;
