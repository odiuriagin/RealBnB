export const OPEN_SPINNER = 'OPEN_SPINNER';
export const CLOSE_SPINNER = 'CLOSE_SPINNER';

export const openSpinner = spinner => {
    return {
        type: OPEN_SPINNER,
        spinner,
    };
};

export const closeSpinner = () => {
    return {
        type: CLOSE_SPINNER,
    };
};