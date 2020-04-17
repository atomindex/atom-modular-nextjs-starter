import fetch from 'isomorphic-unfetch';

export default {
    async getShows() {
        let res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        let data = await res.json();
        return data;
    }
};