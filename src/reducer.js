export const Data = (state=[], action) => {
    switch (action.type) {
        case "success":
            return state = [action.payload]
            break;
        case "failed":
            return state = [action.payload]
            break;
    
        default:
            return state
            break;
    }
}