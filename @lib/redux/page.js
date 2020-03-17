import React from 'react';
import { withRedux } from './with-redux';
import reduxManager from './manager';

export default ({ reducers, actions, getInitialState }) => (Page) => {
    return withRedux(reduxManager.makeStoreFactory(reducers), actions, getInitialState)(Page);
};