import React from 'react';
import { Provider, connect } from 'react-redux';
import App from 'next/app';
import reduxManager from './manager';

export let withRedux = (initializeStore, actions, fetchInitialState) => {
    return (PageComponent, pageContext = {}) => {
        let { ssr = true } = pageContext;

        let ConnectedPageComponent = connect(
            (state) => state,
            (dispatch) => ({actions: reduxManager.bindActionsCreators(actions, dispatch)})
        )(PageComponent);

        let store;
        let WithRedux = ({__initialReduxState, ...props}) => {
            store = store || initializeStore(__initialReduxState);
            return (
                <Provider store={store}>
                    <ConnectedPageComponent {...props} />
                </Provider>
            )
        };

        if (process.env.NODE_ENV !== 'production') {
            // Make sure people don't use this HOC on _app.js level
            let isAppHoc = PageComponent === App || PageComponent.prototype instanceof App;
            if (isAppHoc) {
                throw new Error('The withRedux HOC only works with PageComponents')
            }

            // Set the correct displayName in development
            let displayName = PageComponent.displayName || PageComponent.name || 'Component';
            WithRedux.displayName = `withRedux(${displayName})`
        }

        if (ssr || PageComponent.getInitialProps) {
            WithRedux.getInitialProps = async (context) => {
                let initialState = await fetchInitialState(context);
                store = initializeStore(initialState);
                context.store = store;
                let pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {};
                return {
                    ...pageProps,
                    __initialReduxState: store.getState()
                }
            };
        }

        return WithRedux;
    };
};