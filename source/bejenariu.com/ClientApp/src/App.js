import React from 'react';
import { Route } from 'react-router';
import Layout from './scenes/Layout';
import Home from './scenes/Home';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
  </Layout>
);
