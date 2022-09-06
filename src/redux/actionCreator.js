import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseUrl } from './baseUrl';
import { type } from '@testing-library/user-event/dist/type';

export const addComment = (dishId , author,rating, comment) =>({   
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId : dishId,
            author : author,
            rating : rating,
            comment : comment,
    }   
})

export const commentLoading = () =>({
    type:actionTypes.COMMENTS_LOADING
})

export const loadComment = comments =>({
    type:actionTypes.LOAD_COMMENTS,
    payload:comments

})

export const fetchComments =() => dispatch =>{
    dispatch(commentLoading());
   
    axios.get(baseUrl + "comments")
    .then(response => response.data)
    .then(comments => dispatch(loadComment(comments)))
}


export const loadDishes = dishes =>({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = ()  =>({
    type: actionTypes.DISHES_LOADING,
})


export const fetchDishes = () =>{
    return dispatch =>{
        dispatch(dishesLoading());

        axios.get(baseUrl + "dishes")
        .then(response => response.data)
        .then(dishes => dispatch(loadDishes(dishes)))

    }
}
