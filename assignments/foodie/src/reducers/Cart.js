
export default (state = [], action) => {
    switch(action.type) {
        case 'CART_ADD' :

            const arr = [...state];
            let isAdded = false;


            for(let i=0;i<arr.length;i++) {
                if(arr[i].name === action.payload.name) {
                    arr[i].quantity = Number(arr[i].quantity);
                    isAdded = true;
                    break;
                    
                }
            }

            if(isAdded) {
                return [...arr];
            } else {
                return [...arr,action.payload];
            }
            // return [...state, action.payload];

        case 'CART_REMOVE':

            const arr2 = [...state];
            // let isAdded = true;


            const res = arr2.filter((item) => {
                return item.name !== action.payload.name;
            });

            return res;

        default:
            return state;    
    }
};
