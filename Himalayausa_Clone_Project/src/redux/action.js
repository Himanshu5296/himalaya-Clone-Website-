export const FILTER_DATA = "FILTER_DATA"
export const SORT_ASC  = "Pasc"
export const SORT_DESC  = "Pdesc"
export const ADD_DATA = "ADD_DATA"
export const INC_QTY= "INC_QTY"
export const DEC_QTY= "DEC_QTY"
export const DELETE_ITEM = "DELETE_ITEM"
export const UPDATE_PRICE = "UPDATE_PRICE"
export const EMPTY_CART = "EMPTY_CART"

export const sortdata = (payload)=>({
type:payload,
})

export const filterdata = (payload)=>({
type : FILTER_DATA,
payload,
})

export const storage = (payload) =>({
type : ADD_DATA,
payload : {...payload,qty:1, payprice :payload.price}
})
  
export const incqty = (payload)=>({
type : INC_QTY,
payload,
})

export const decqty = (payload)=>({
type : DEC_QTY,
payload,
})

export const deleteitem = (payload)=>({
    type : DELETE_ITEM,
    payload,
})

export const updateprice = ()=>({
type : UPDATE_PRICE,
})

export const emptycart = ()=>({
    type : EMPTY_CART,
})