
type stateType = {
    themeId: number
}
const initState = {
    themeId: 1,
}

export const themeReducer = (state: stateType = initState, action: ActionTypes): stateType => { // fix any
    switch (action.type) {
        // дописать
            case 'SET_THEME_ID':
                return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id })  as const// fix any

type ActionTypes = ReturnType<typeof changeThemeId>