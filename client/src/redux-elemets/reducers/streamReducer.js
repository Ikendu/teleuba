// this holds all streams as objects with the properties of 
// {
//     who
//     stream
// }
export default (state, action){
    if (action.type === 'ADD_STREAM') {
        const copyState = { ...state };
        // this will over-write the who with {who and stream}
        copyState[action.payload.who] = action.payload;
        return copyState;
    } else if (action.type === 'LOGOUT_ACTION') {
        return {}    
    } else {
        return state
    }
}