import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import headerSlice from "@/widgets/header/model/headerSlice";
import cartSlice from "@/widgets/cart/model/cartSlice";
import {authSlice} from "@/features/auth";

export const store = configureStore({
    reducer: {
        app: appSlice,
        header:headerSlice,
        cart:cartSlice,
        auth:authSlice.reducer,
    },
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch;