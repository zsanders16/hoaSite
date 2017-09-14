const displayPDF = (state = {}, action) => {
    switch(action.type) {
        case 'SET_DISPLAYPDF':
            return  {...action.object} 
        default:
            return state;
    }
}
  
export default displayPDF;