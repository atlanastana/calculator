import {createAction, props} from "@ngrx/store";


export const addNumber = createAction('[Calculator] AddNumber', props<{ val: string }>());

export const onClear = createAction('[Calculator] OnClear');

export const addOperation = createAction('[Calculator] AddOperation', props<{ val: string }>());


