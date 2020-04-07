import React from 'react';
import { withRedux } from './with-redux';
import reduxManager from './manager';

export default ({ slices, getInitialState }) => (Page) => {
    let reducers = {};
    let actions = {};

    Object.keys(slices).forEach((sliceName) => {
        reducers[sliceName] = slices[sliceName].reducer;
        actions[sliceName] = slices[sliceName].actions;
    });

    return withRedux(
        reduxManager.makeStoreFactory(reducers),
        actions,
        getInitialState
    )(Page);
};