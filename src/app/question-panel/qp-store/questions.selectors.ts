import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./questions.reducer";

export const qqq = createFeatureSelector<State>("questions");
export const selectQuestions = createSelector(
	qqq,
	store => { return store.questions }
);

