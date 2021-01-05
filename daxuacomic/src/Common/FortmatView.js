export const format = (e) => {
    if(e){
        return  e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
}
