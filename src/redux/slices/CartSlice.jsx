import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => { 
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) { // If the product is in the cart, just increase its quantity
                state.cart= state.cart.map((item)=>item.id===action.payload.id ?{...item,qty:item.qty+1}:item); // Increase the quantity of the product by 1
            } else { // If the product is not in the cart, add it to the cart
                state.cart.push(action.payload);
            }
            
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        incrementQty: (state, action) => { // Increase the quantity of the product by 1
            state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item); // Increase the quantity of the product by 1
        },
        decrementQty: (state, action) => { // Decrease the quantity of the product by 1
            state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item);
        }, // If the quantity of the product is 1, remove it from the cart
    }
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions;
export default CartSlice.reducer;