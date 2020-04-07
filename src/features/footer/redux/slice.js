import { createSlice } from '@reduxjs/toolkit';
import update from 'immutability-helper';

export default createSlice({
    name: 'feature/footer',
    initialState: {},
    reducers: {
        messagesIncCount: (state, action) => {
            console.log(state, action);
            return update(state, {
                messagesCount: {
                    $apply: (messagesCount) => messagesCount + 1
                }
            });
        },

        messagesDecCount: (state, action) => {
            return update(state, {
                messagesCount: {
                    $apply: (messagesCount) => messagesCount - 1
                }
            });
        }
    }
});