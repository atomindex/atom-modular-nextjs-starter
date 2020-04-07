import headerGetInitialState from '~/features/header/redux/state';
import footerGetInitialState from '~/features/footer/redux/state';

export default async () => {
    let header = await headerGetInitialState();
    let footer = await footerGetInitialState();
    return { header, footer };
};