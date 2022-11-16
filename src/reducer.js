export const Data = (state=[], action) => {
    switch (action.type) {
        case "success":
            return state = [action.payload]
            break;
        case "failed":
            return state = [action.payload]
            break;
        case "updateContent":
            
            const help = state[0].map((item)=>{
                return item.id === action.id ? {...item, body: action.payload} : item
            })
            return state = [help] 
            break;
    
        default:
            return state
            break;
    }
}