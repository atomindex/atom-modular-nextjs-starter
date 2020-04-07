import { createSlice } from '@reduxjs/toolkit';
import update from 'immutability-helper';
import layout from '~/layouts/simple/redux/slices'

let page = createSlice({
    name: 'page/paginator',
    initialState: {},
    reducers: {
        fooTest(state, action) {
            console.log({ state, action });
            return update(state, {
                foo: {
                    $set: action.payload
                }
            });
        }
    }
});

export default { ...layout, page };