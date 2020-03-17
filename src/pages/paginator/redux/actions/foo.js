import { FOO } from '../constants';

export default {
    setFoo: (payload) => {
        return {
            type: FOO.TEST,
            payload: payload
        };
    }
};