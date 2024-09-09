import { Activity } from './../types/index';

export type ActivityActions = {type : 'save-activity'}

type ActivityState = {
    activities: Activity[];
}

export const initialState : ActivityState = {
    activities: []
}

export const activityReducer = (
    state : ActivityState = initialState, 
    action : ActivityActions ) => {

}