import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectCalc = createFeatureSelector<any>('calc');

export const selectValue = createSelector(
  selectCalc,
  (selectCalc) => selectCalc.calValue
);

export const selectFunc = createSelector(
  selectCalc,
  (selectCalc) => selectCalc.funcT
);
