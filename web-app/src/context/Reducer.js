const Reducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return {
                user: null,
                isFetch: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetch: false,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetch: false,
                error: true,
            };
        case "LOGOUT":
            return {
                user: null,
                isFetch: false,
                error: false,
            };
        default:
            return state;
    }
};

export default Reducer;