import {
    STORE_DATA
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    passportNumber: '',
    packageName: '',
    hotelName: '',
    hotelLatitude: '',
    hotelLongitude: '',
    emergency: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case STORE_DATA:
            return {
                ...state,
                name: action.payload.name,
                passportNumber: action.payload.passport,
                packageName: action.payload.package,
                hotelName: action.payload.hotel,
                hotelLatitude: action.payload.hotelLatitude,
                hotelLongitude: action.payload.hotelLongitude,
                emergency: action.payload.emergency
            };
        default: 
            return state;
    }
}