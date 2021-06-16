
const initialState = [{
    count:0,
    value:"Hai"
}]

export function  clickReducer(state=initialState, action) {
  
   
    switch (action.type) {    
        
        case 'ADD_CLICK':
          alert();
            return Object.assign({count: state.count})
        case 'SUB_CLICK':
            return Object.assign({count: state.count-1})
        default:
            return state;
    }
}

