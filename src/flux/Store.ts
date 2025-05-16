import { AppDispatcher, Action, AddPlantPayload } from './Dispatcher';
import { AddGardenType, NavigateActionsType, UpdateActionType } from './Actions';
import { PathPayload } from './Dispatcher';
import { EditPayload } from './Dispatcher';
import { SetPlantsPayload } from './Dispatcher';
import { RawPlant } from '../Types/Types';
import { EditField } from '../Types/Types';

export type State = {
    currentPath: string,
    plants: RawPlant[],
    garden: RawPlant[]
}

type Listener = (state: State) => void;

class Store {
    private _myState: State = {
        currentPath: '',
        plants: [],
        garden: []
    }

    private _listeners: Listener[] = [];

    constructor() {
        AppDispatcher.register(this._handleActions.bind(this));
    }

    getState() {
        return this._myState;
    }

    _handleActions(action: Action): void {
            switch (action.type) {
            case UpdateActionType.SET_PLANTS: {
            const payload = action.payload as SetPlantsPayload;

            if (!payload || !payload.plants) {
                console.warn('SET_PLANTS received invalid payload:', payload);
                break;
            }

            const { plants } = payload;

            // Skip if the same array reference (optional optimization)
            if (this._myState.plants === plants) {
                break;
            }

            this._myState = {
                ...this._myState,
                plants,
            };

            this._emitChange();
            break;
            }

            case NavigateActionsType.NAVIGATE:
                const pathPayload = action.payload as PathPayload;
                if (pathPayload?.path) {
                    this._myState = {
                        ...this._myState,
                        currentPath: pathPayload.path
                    };
                    this._emitChange();
                }
            break;
                case UpdateActionType.UPDATE_PLANT:
                const updated: EditField = (action.payload as EditPayload).updated;
                    this._myState = {
                    ...this._myState,
                    plants: this._myState.plants.map(plant =>
                    plant.common_name === updated.common_name
                        ? { ...plant, ...updated } 
                        : plant
                    )
                };
                    this._emitChange();
            break;
                case AddGardenType.ADD_GARDEN:
                    const plant: RawPlant = (action.payload as AddPlantPayload).plant;
                    this._myState = {
                        ...this._myState,
                        garden: [...this._myState.garden, plant]
                    };
                    this._emitChange();
            break;
        }

    }

    private _emitChange(): void {
        const state = this.getState();
        for (const listener of this._listeners) {
            listener(state);
        }
    }

    unsubscribe(listener: Listener): void { 
        this._listeners = this._listeners.filter(l => l !== listener);
    }

    subscribe(listener:Listener): void {
        this._listeners.push(listener);
        listener(this.getState());
    }
}

export const store = new Store();