// import { type } from '@testing-library/user-event/dist/type';
import * as actionTypes from './actionTypes';
// import DISHES from '../data/dishes';
import { baseUrl } from './baseUrl';
import axios from 'axios';

export const addComment = (dishId, rating, author, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }

})

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})

export const loadComments = (comments) => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

// export const fetchComments = () => (dispatch) => {
//     dispatch(commentLoading());

//     axios.get(baseUrl + "comments")
//     .then(response => response.data)
//     .then(comments => dispatch(loadComments(comments)))
// }
//---
export const fetchComments = () => {
    return dispatch => {
        dispatch(commentLoading());
        axios.get(baseUrl + "comments")
            .then(response => {
                // console.log("Dispatching LOAD_COMMENTS with payload:", response.data); // Log the fetched comments
                dispatch({ type: actionTypes.LOAD_COMMENTS, payload: response.data });
            })
            .catch(error => console.error("Error fetching comments:", error));
    };
};
//----

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        axios.get(baseUrl + "dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))
    }
}