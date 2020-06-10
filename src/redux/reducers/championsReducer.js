import champions from '../../data/champions.json'

const initialState = [...champions]

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}