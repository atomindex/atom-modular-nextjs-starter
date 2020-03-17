import update from 'immutability-helper';
import { FOO } from '../../constants';

export default {
    [FOO.TEST]: (state, action) => {
        return update(state, {
            foo: {
                $set: action.payload
            }
        });
    }
};