import { RSAA } from 'redux-api-middleware'
import { createAction } from '@reduxjs/toolkit'

export const getPokemonsRequest = createAction('GET_POKEMONS_REQUEST')
export const getPokemonsSuccess = createAction('GET_POKEMONS_SUCCESS')
export const getPokemonsFailure = createAction('GET_POKEMONS_FAILURE')

export const getPokemons =
  (options = {}) =>
  (dispatch) => {
    const { limit = 784 } = options

    return dispatch({
      [RSAA]: {
        endpoint: `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`,
        method: 'GET',
        types: [
          getPokemonsRequest.type,
          getPokemonsSuccess.type,
          getPokemonsFailure.type,
        ],
      },
    })
  }
