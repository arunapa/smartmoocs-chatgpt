import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../store";

import { ISemester } from "./types";
import { generateMockState } from "./mock";
import { mockSemesters } from "./mockSemester";

interface DifficultTopicsState {
    semesters: ISemester[];
}

const initialState: DifficultTopicsState = {
    semesters: mockSemesters
}

export const difficultTopicsSlice = createSlice({
    name: "difficultTopics",
    initialState,
    reducers: {}
});

export const selectSemesters = (state: AppState) => state.dt.semesters;

export default difficultTopicsSlice.reducer;
