export const initialState = {
    user: null,
    drooms: []
};

export const actionTypes = {
    SET_USER: "SET_USER",
    SET_ROOM: "SET_ROOM"
};

const reducer = (state, action) => {
    switch (action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.SET_ROOM:
            return {
                ...state,
                drooms: [
                    ...state.drooms,
                    action.room
                ]
            }
        default:
            return state;
    }
}

export default reducer;