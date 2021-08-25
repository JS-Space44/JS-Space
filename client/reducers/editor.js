
import * as types from '../constants/actionTypes';

const initialState = {
    code: '',
};

const editorReducer = (state = initialState, action) => {
    switch (action.type) {
        case  types.CLEAR_CODE: {
            return { code: '' };
        };
        case types.LOAD_CODE: {
            return { code: action.payload };
        };
        case types.RUN_CODE: { 
        console.log('RUN CODE');
        return state; 
        }
        default:
            return state;
    }
};

export default editorReducer;
