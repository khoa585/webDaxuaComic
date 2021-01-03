export const format = (e) => {
    return  e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
