import axios from 'axios';
import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_LIST_CATEGORY_REQUEST,
    PRODUCT_LIST_CATEGORY_SUCCESS,
    PRODUCT_LIST_CATEGORY_FAIL
} from '../constants/productConstants';

 
export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });

    try{
        const { data } = await axios.get('/api/products');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch(err) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: err.message});
    }
};

export const listCategoryProducts = (category) => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_CATEGORY_REQUEST
    });

    try{
        const { data } = await axios.get('/api/products/category/'+category);
        dispatch({ type: PRODUCT_LIST_CATEGORY_SUCCESS, payload: data});
    } catch(err) {
        dispatch({ type: PRODUCT_LIST_CATEGORY_FAIL, payload: err.message});
    }
};

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });

    try {
        const { data } = await axios.get(`/api/products/details/${productId}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch(error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message});
    }
};