import api from "../api";

export const fetchNews = (category) => async dispatch  => {
    const response = await api.get(`/news?category=${category}`);

    dispatch({
        type: 'FETCH_NEWS',
        payload: response.data.data
    });
};