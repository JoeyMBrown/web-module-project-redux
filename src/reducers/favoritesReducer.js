import { ADD_FAVORITE, CHANGE_FAVORITES_DISPLAY, REMOVE_FAVORITE_MOVIE } from '../actions/movieActions.js';

export const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        
        case CHANGE_FAVORITES_DISPLAY:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }

        case REMOVE_FAVORITE_MOVIE:
            return {
                ...state,
                favorites: state.favorites.filter(movie=>(action.payload !== movie.id))
            }
        default:
            return state;
    }
}

export default reducer;