import update from 'immutability-helper';

import { MESSAGES } from '../constants';

export default {
    [MESSAGES.INC_COUNT]: (state, action) => {
        return update(state, {
            messagesCount: {
                $apply: (messagesCount) => messagesCount + 1
            }
        });
    },

    [MESSAGES.DEC_COUNT]: (state, action) => {
        return update(state, {
            messagesCount: {
                $apply: (messagesCount) => messagesCount - 1
            }
        });
    }
};