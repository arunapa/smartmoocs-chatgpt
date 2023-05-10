import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppState, AppDispatch } from "./store";

/**
 * Redux dispatch typed for custom redux actions.
 * @returns The dispatch method typed for custom redux actions.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Selector typed for accessing application state.
 */
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;