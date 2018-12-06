import React from 'react';
import {Link} from 'gatsby';

const Header = ({locale}) => (
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
                    to={`/${locale}`}
                    style={{
                        display: 'block',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    {locale === 'ru' ? 'Домой' : 'Home'}
                </Link>
                <Link
                    to={`/${locale}/about`}
                    style={{
                        marginLeft: 15,
                        display: 'block',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    {locale === 'ru' ? 'О нас' : 'About'}
                </Link>
                <Link
                    to={`/${locale}/sections`}
                    style={{
                        marginLeft: 15,
                        display: 'block',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    {locale === 'ru' ? 'Секции' : 'Sections'}
                </Link>
                <Link
                    to={`/${locale}/search`}
                    style={{
                        marginLeft: 15,
                        display: 'block',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    {locale === 'ru' ? 'Поиск' : 'Search'}
                </Link>
            </div>
        </div>
    </div>
);

export default Header;
