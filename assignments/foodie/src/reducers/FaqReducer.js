
export default (state = null, action) => {
    switch(action.type) {
        case 'FETCH_FAQ' :
            return action.payload;
        default:
            return state;    
    }
};
