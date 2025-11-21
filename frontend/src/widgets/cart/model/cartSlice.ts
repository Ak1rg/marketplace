import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ICartCard {
    article:number 
    name:string 
    img:string
    price:number 
    weight:number 
    quantity:number 
    rating:number 
    reviews:number 
}

interface IQuantity {
    act:'+' | '-' 
    article:number
}

interface IState {
    cart:ICartCard[]
}

const initialState:IState = {
    cart:[
        {
            article: 100001,
            name: 'Alibek Alibek Alibek Alibek Alibek Alibek Alibek',
            price: 1299,
            rating: 4.7,
            reviews: 12,
            img:'/book.png',
            weight:0.8,
            quantity:1,
        },
        {
            article: 100002,
            name: 'Alibek',
            price: 1399,
            rating: 4.9,
            reviews: 15,
            img:'/book.png',
            weight:1.2,
            quantity:2,
        },
    ],
}

export const cartSlice = createSlice({
    name:'cartSlice',
    initialState:initialState,
    reducers:{
        addToCart(state,action:PayloadAction<ICartCard>){
            state.cart.push(action.payload)
        },
        removeFromCart(state,action:PayloadAction<number>){
            state.cart = state.cart.filter(card => card.article !== action.payload)
        },
        changeQuantity(state,action:PayloadAction<IQuantity>){
            const product = state.cart.find((product:ICartCard) => product.article === action.payload.article)
            if(!product) return
            if(product.quantity!==1 && action.payload.act==='-'){
                product.quantity -= 1
            } else if (action.payload.act==='+'){
                product.quantity += 1
            }
        },

    }
})

export const {
    addToCart,
    removeFromCart,
    changeQuantity,
} = cartSlice.actions

export default cartSlice.reducer