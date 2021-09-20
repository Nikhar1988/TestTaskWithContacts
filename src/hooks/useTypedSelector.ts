import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../reducers/userReducer";

export const useSelectorType: TypedUseSelectorHook<RootState> = useSelector;