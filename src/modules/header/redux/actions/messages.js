import { MESSAGES } from '../constants';

export default {
    incCount: () => {
        return {
            type: MESSAGES.INC_COUNT
        }
    },

    decCount: () => {
        return {
            type: MESSAGES.DEC_COUNT
        }
    }
}