interface ProductState {
    products: any[];
}

interface Action {
    type: string;
    payload?: any;
}

const initialState: ProductState = {
    products: [],
};

const productsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

export default productsReducer;
