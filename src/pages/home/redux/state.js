import getSimpleLayoutState from '~/layouts/simple/redux/state';

export default async () => {
    let simpleLayoutState = await getSimpleLayoutState();
    return {
        ...simpleLayoutState,
        page: {
            home: true
        }
    };
};