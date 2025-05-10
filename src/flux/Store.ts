import { AppDispatcher, Action } from './Dispatcher';
import { getPlants } from '../services/getPlants';

export type State = {
    plants: [],
    garden: []
}

type Listener = (state: State) => void;

class Store {
    private _myState: State = {
        plants: [],
        garden: []
    }

    private _listeners: Listener[] = [];

    constructor() {
        AppDispatcher.register(this._handleActions.bind(this));
    }

    getState() {
        return {
            
        };
    }

    _handleActions(action: Action): void {
        switch (action.type) {
            case 'GET_DATA':
                this._myState = {
                    ...this._myState

                    
                }
            this._emitChange()
            break;
            case 'ADD_PLANT':

                this._myState = {
                    ...this._myState,
                    //[this._myState.garden, payload]
                    //añadir planta a array de jardin
                }
            this._emitChange()
            break;
        
        }
    }

    private _emitChange(): void {
        for (const listener of this._listeners) {
           // this._handleActions()
        }
    }

    unsubscribe(listener: Listener): void { 
        
    }

    subscribe(listener:Listener): void {
        this._listeners.push(listener);
    }
}

export const store = new Store();