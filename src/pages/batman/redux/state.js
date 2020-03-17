import REST from '~/rest';
import getSimpleLayoutState from '~/layouts/simple/redux/state';

export default async () => {
    let simpleLayoutState = await getSimpleLayoutState();
    let shows = await REST.batman.getShows();
    return {
        ...simpleLayoutState,
        page: {
            shows: shows.map((entry) => entry.show)
        }
    };
};