import React from 'react';
import Layout from '../components/layout';

const AboutPage = ({pageContext}) => (
  <Layout locale={pageContext.locale}>
    <h1>Hi, this is About page</h1>
    <p>Welcome to About</p>
  </Layout>
);

export default AboutPage;
