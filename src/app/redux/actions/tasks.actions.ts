//busy with this example
// https://github.com/Kaizeras/ngx-redux-ui-management-recipes/blob/master/src/app/common/games/games.actions.ts


import {Action } from '@ngrx/store';

export const LOAD = '[Tasks] load tasks';
export const LOAD_SUCCESS = '[Tasks] successfully loaded tasks';
export const LOAD_FAILURE = '[Tasks] failed to load tasks';


export class LoadTasksAction implements Action {
    readonly type = LOAD;
    constructor(public payload: any) {

    }
}

export class LoadTasksSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: any) { }
}

export class LoadTasksFailedAction implements Action {
    readonly type = LOAD_FAILURE;

    constructor(public payload: any) {}
}

export type TaskActions = LoadTasksAction | LoadTasksFailedAction | LoadTasksSuccessAction;
