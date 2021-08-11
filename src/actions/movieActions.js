export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const CHANGE_FAVORITES_DISPLAY = "CHANGE_FAVORITES_DISPLAY";
export const REMOVE_FAVORITE_MOVIE = "REMOVE_FAVORITE_MOVIE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movie) => {
    return({type: ADD_MOVIE, payload: movie})
}

export const AddFavoriteMovie = (movie) => {
    return({type: ADD_FAVORITE, payload: movie})
}

export const changeDisplayFavorites = () => {
    return({type: CHANGE_FAVORITES_DISPLAY})
}

export const removeFavoriteMovie = (id) => {
    return({type: REMOVE_FAVORITE_MOVIE, payload: id})
}