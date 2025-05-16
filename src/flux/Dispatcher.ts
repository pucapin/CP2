import { EditField } from "../Types/Types"
import { RawPlant } from "../Types/Types"
export type PathPayload = {
    path: string
}

export type EditPayload = {
    updated: EditField
}

export type SetPlantsPayload = {
    plants: RawPlant[]
}

export type AddPlantPayload = {
    plant: RawPlant
}

export type RemovePlantPayload = {
    name: string
}

export type Payload = PathPayload | EditPayload | SetPlantsPayload | AddPlantPayload | RemovePlantPayload | null;

export interface Action {
    type: string;
    payload?: Payload;
}


export class Dispatcher {
    private _listeners: Array<(action: Action) => void>;

    constructor() {
        this._listeners = [];
    }

    register(callback: (action: Action) => void): void {
        this._listeners.push(callback);
    }

    dispatch(action: any): void {
        for (const listener of this._listeners) {
            listener(action);
        }
    }
}

export const AppDispatcher = new Dispatcher();