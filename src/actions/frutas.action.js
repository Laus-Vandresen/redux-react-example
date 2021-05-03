import { actionsType } from '../constantes/frutas';

const actions = {
    adicionar: fruta => ({
        type: actionsType.ADICIONAR_FRUTA,
        payload: fruta,
    }),
    remover: fruta => ({
        type: actionsType.REMOVER_FRUTA,
        payload: fruta,
    })
}

export { actions };