import headerGetInitialState from '~/modules/header/redux/state';
import footerGetInitialState from '~/modules/footer/redux/state';

export default async () => {
    let header = await headerGetInitialState();
    let footer = await footerGetInitialState();
    return { header, footer };
};