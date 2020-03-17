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
            combineReducers(this.createReducers(reducers)),
            initialState,
            composeWithDevTools(applyMiddleware(thunk))
        );
    },

    createReducer(name, methods) {
        return (state = {}, action) => (methods[action.type] ? methods[action.type](state, action) : state);
    },

    createReducers(methodsMap) {
        return Object.keys(methodsMap).reduce((result, reducerName) => {
            result[reducerName] = this.createReducer(reducerName, methodsMap[reducerName]);
            return result;
        }, {});
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