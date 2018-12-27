export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';
export const CLEAR_SEARCH_ERRORS = 'CLEAR_SEARCH_ERRORS';

export const receiveSearchErrors = () => {
    return {
        type: RECEIVE_SEARCH_ERRORS,
    };
};

export const clearSearchErrors = () => {
    return {
        type: CLEAR_SEARCH_ERRORS,
    };
};