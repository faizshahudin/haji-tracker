import {
    STORE_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
} from './types';

export const storeProfileData = (data) => {
    return {
        type: STORE_DATA,
        payload: data
    }
};