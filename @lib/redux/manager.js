import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default {
    makeStoreFactory(reducers) {
        return (initialState) => this.createStore(reducers, initialState);
    },

    createStore(reducers, initialState) {
        console.log('CREATE STORE', initialState);
        return createStore(
            combineReducers(reducers),
            initialState,
            composeWithDevTools(applyMiddleware(thunk))
        );
    },

    bindActionsCreators(actions, dispatch) {
        return Object.keys(actions).reduce((acc, key) => {
            if (typeof actions[key] === 'object') {
                acc[key] = this.bindActionsCreators(actions[key], dispatch);
            } else {
                acc[key] = function() {
                    return dispatch(actions[key].apply(null, arguments));
                };
            }
            return acc;
        }, {})
    }
};