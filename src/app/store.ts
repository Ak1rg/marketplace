import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import headerSlice from "@/widgets/header/model/headerSlice";

export const store = configureStore({
    reducer: {
        app: appSlice,
        header:headerSlice,
    },
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch;