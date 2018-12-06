import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const StyledItemsRow = styled.div`
    display: flex;
`;

const StyledItem = styled.div`
    height: 100px;
    width: 300px;
    margin-left: 20px;
    border: 1px solid #f3f3f3;
    text-align: center;
`;

const StyledSectionName = styled.span`
    text-transform: capitalize;
`;

const Section = (props) => (
    <Layout locale={props.pageContext.locale}>
        <h1>Hi, this is "<StyledSectionName>{props.pageContext.section}</StyledSectionName>" Section page</h1>
        <h2>{props.pageContext.locale}</h2>
        <StyledItemsRow>
            {
                props.data.items.edges.map(({node}) => (
                    <StyledItem>
                        <h3>{node.name}</h3>
                        <p>{node.id}</p>
                    </StyledItem>
                ))
            }
        </StyledItemsRow>
    </Layout>
);

export default Section;

export const ItemsQuery = graphql`
    query ItemsQuery($section: String!) {
        items: allItemsJson(filter: {section: {eq: $section}}) {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;
