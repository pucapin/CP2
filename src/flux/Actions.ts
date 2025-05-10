import { AppDispatcher } from './Dispatcher';

export const GetData = {
    type: 'GET_DATA',
    //payload: data
}
const AddPlant = {
    type: 'GET_DATA',
    //payload: data
}


export const Actions = {
    do: () => {
        AppDispatcher.dispatch({
            GetData,
            AddPlant
        },);
    },
};