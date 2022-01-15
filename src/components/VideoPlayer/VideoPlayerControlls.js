const ACTIONS = {
    CHANGE_KEYWORD: "change_keyword",
    CHANGE_RATING: "change_rating",
    CHANGE_PLAYE_STATE: "change_playstate",
    CHANGE_NAVIGATE: "change_navigate",
    CHANGE_VOLUMEN: "change_volumen",
    CHANGE_SEEKING: "change_seeking",
};

const ACTIONS_REDUCERS = {
    [ACTIONS.CHANGE_KEYWORD]: (state, action) => ({
        ...state,
        times: state.times + 1,
        keyword: action.payload,
    }),
    [ACTIONS.CHANGE_RATING]: (state, action) => ({
        ...state,
        rating: action.payload,
    }),
    [ACTIONS.CHANGE_PLAYE_STATE]: (state, action) => ({
        ...state,
        playing: action.payload,

    }),
    [ACTIONS.CHANGE_NAVIGATE]: (state, action) => ({
        ...state,
        rating: action.payload,
    }),
    [ACTIONS.CHANGE_VOLUMEN]: (state, action) => ({
        ...state,
        rating: action.payload,
    }),
    [ACTIONS.CHANGE_SEEKING]: (state, action) => ({
        ...state,
        rating: action.payload,
    }),
};
const reducer = (state, action) => {
    const actionReducer = ACTIONS_REDUCERS[action.type];
    return actionReducer ? actionReducer(state, action) : state;
};
export default function useVideoPlayer({ }) {

    const [{ keyword, rating, playing, navigate, seeking }, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating
    });

    return {
        changeKeyword: ({ keyword }) =>
            dispatch({ type: ACTIONS.CHANGE_KEYWORD, payload: keyword }),
        changeRating: ({ rating }) =>
            dispatch({ type: ACTIONS.CHANGE_RATING, payload: rating }),
        changePlay: ({ playing }) =>
            dispatch({ type: ACTIONS.CHANGE_PLAYE_STATE, payload: playing }),
        keyword,
        rating
    };
} 