import { AppDispatcher } from './Dispatcher';
import { EditField, RawPlant } from '../Types/Types';

export const NavigateActionsType = {
    NAVIGATE: 'NAVIGATE'
}

export const UpdateActionType = {
    SET_PLANTS: 'SET_PLANTS',
    UPDATE_PLANT: 'UPDATE_PLANT'
}

export const AddGardenType = {
    ADD_GARDEN: 'ADD_GARDEN',
}

export const RemoveGardenType = {
    REMOVE_GARDEN: 'REMOVE_GARDEN',
}

export const NavigateActions = {
    navigate: (path: string) => {
        AppDispatcher.dispatch({
            type: NavigateActionsType.NAVIGATE,
            payload: { path } // Payload atributo de navegación dependiendo del botón
        });
    },
};

export const UpdateActions = {
    updatePlant: (updated: EditField) => {
        AppDispatcher.dispatch({
            type: UpdateActionType.UPDATE_PLANT,
            payload: {updated}
        });
    },
    setPlants: (plants: RawPlant[]) => {
        AppDispatcher.dispatch({
            type: UpdateActionType.SET_PLANTS,
            payload: {plants}
        });
    }
}

export const AddActions = {
    addToGarden: (plant:RawPlant) => {
        AppDispatcher.dispatch({
            type: AddGardenType.ADD_GARDEN,
            payload: {plant}
        })
    }
}


export const RemoveActions = {
    RemoveFromGarden: (name: string) => {
        AppDispatcher.dispatch({
            type: AddGardenType.ADD_GARDEN,
            payload: name
        })
    }
}