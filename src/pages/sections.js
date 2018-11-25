import React from 'react';
import {graphql} from 'gatsby';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const StyledLink = styled(Link)`
    font-size: 16px;
    color: cadetblue;
    text-transform: uppercase;
`;

const IndexPage = ({data}) => (
    <Layout>
        <h1>Hi, this is Sections page</h1>
        <p>
            {
                data.sections.edges.map(({node}) => (
                    <p>
                        <StyledLink
                            to={`/${node.name}`}
                            style={{
                                'margin-left': 15,
                                display: 'block',
                                textDecoration: 'none',
                            }}
                        >
                            {node.name}
                        </StyledLink>
                    </p>
                ))
            }
        </p>
    </Layout>
);

export default IndexPage;

export const IndexQuery = graphql`
    query IndexQuery {
        sections: allSectionsJson {
            edges {
                node {
                    id,
                    name
                }
            }
        }
    }
`;
