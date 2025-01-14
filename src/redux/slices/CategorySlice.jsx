import {createSlice} from '@reduxjs/toolkit';

const CategorySlice=createSlice({ // Create a slice
    name:'category', // Slice name
    initialState:{ // Initial state
        category:"All",
    },
    reducers:{
        setCategory:(state,action)=>{ // Reducer function
            state.category=action.payload; // Update the state
        },
    },
});

export const {setCategory}=CategorySlice.actions;
export default CategorySlice.reducer;
