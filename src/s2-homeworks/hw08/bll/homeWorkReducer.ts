import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state.sort((a, b) => action.payload === 'up' ? a.name > b.name ? 1 : -1 : a.name < b.name ? 1 : -1)]
        }
        case 'check': {
            const sorted = [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
            return sorted.filter(user => user.age >= action.payload)
        }
        default:
            return state
    }
}

export const sort = (payload: {up: string}) => {
    return {type: 'sort', payload} as const
}

export const check = (payload: {age: number }) => {
    return {type: 'check', payload} as const
}