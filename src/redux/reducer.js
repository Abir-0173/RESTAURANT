// import DISHES from '../data/dishes'
// import COMMENTS from '../data/comments'
import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

// const initialState = {
//     dishes: DISHES,
//     comments: COMMENTS,
// }

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload
            }
        default:
            return dishState;
    }
}
const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            // console.log("Reducer received LOAD_COMMENTS with payload:", action.payload);
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            }
        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }
        // case actionTypes.ADD_COMMENT:
        //     let comment = action.payload;
        //     comment.id = commentState.length;
        //     comment.date = new Date().toDateString();
        //     // console.log(comment);
        //     return commentState.concat(comment);
        default:
            return commentState;
    }

}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})