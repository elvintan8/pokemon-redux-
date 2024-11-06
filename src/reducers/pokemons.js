import {
  getPokemonsRequest,
  getPokemonsSuccess,
  getPokemonsFailure
} from '../actions/pokemons'

const initialState = {
  collection: {},
  isFetched: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case getPokemonsRequest.type:
      return {
        ...state,
        isFetched: true
      }

    case getPokemonsSuccess.type:
      return {
        ...state,
        collection: {
          ...state.collection,
          ...action.payload.results.reduce((accumulator, item) => {
            const { url } = item
            const id = url.substring(34, url.length - 1)

            return {
              ...accumulator,
              [id]: {
                id,
                ...item
              }
            }
          }, {})
        },
        isFetched: false
      }

    case getPokemonsFailure.type:
      return {
        ...state,
        isFetched: false
      }

    default:
      return state
  }
}
