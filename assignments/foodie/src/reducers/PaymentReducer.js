export default (state = 0, action) => {
    switch (action.type) {
        case 'PAYMENT':
            return action.payload;
        default:
            return state;
    }
};
