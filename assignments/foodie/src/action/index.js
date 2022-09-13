import api from "../api";

export const fetchFaq = (tag) => async dispatch => {

    const response = await api.get(`/mini-project/faq.json`);

    dispatch({
        type: 'FETCH_FAQ',
        payload: response.data[`Our ${tag}`].queries
    });
};

export const fetchMenu = (category) => async dispatch => {

    const response = await api.get('/mini-project/menu.json');

    const res = response.data["menu-items"].filter((item) => {
        return item.category.includes(category)
    });

    const data = res.map(val => ({ ...val, quantity: 0 }));

    dispatch({
        type: 'FETCH_MENU',
        payload: data
    });

};

export const fetchCart = (cartItems) => dispatch => {

    dispatch({
        type: 'CART_ADD',
        payload: cartItems
    });
};

export const fetchCartAfterRemove = (item) => dispatch => {

    dispatch({
        type: 'CART_REMOVE',
        payload: item
    });
};


export const fetchPayment = (items) => dispatch => {

    const arr = [...items];
    let pay = 0;

    for (let i = 0; i < arr.length; i++) {
        pay += Number(arr[i].price) * Number(arr[i].quantity);
    }

    dispatch({
        type: 'PAYMENT',
        payload: pay
    });
};