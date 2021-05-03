import { actionsType } from '../constantes/frutas';

const INITIAL_STATE = {
    frutas: [],
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsType.ADICIONAR_FRUTA:
            return { frutas: [...state.frutas, {...action.payload }]}
        case actionsType.REMOVER_FRUTA:
            return { frutas: state.frutas.filter(x => x.id !== action.payload.id) }
        default:
            return state
    }
}

export { reducers };