import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decqty, deleteitem, emptycart, incqty, updateprice } from '../redux/action'

export const Cart = () => {
    let cartitems = useSelector((state)=>state.cartdata)
    let totalprice = useSelector((state)=>state.totalprice)
console.log(cartitems)

let dispatch = useDispatch()
let handleinc = (id)=>{
dispatch(incqty(id))
}
let handledec = (id)=>{
  dispatch(decqty(id))
  }
 let handleremove = (id)=>{
dispatch(deleteitem(id))
 } 
let handleupdate = ()=>{
dispatch(updateprice())
dispatch(deleteitem())
}

let handleempty = ()=>{
  dispatch(emptycart())
}


  return (
    <>
      <div>Cart</div>
      {cartitems.map((el)=>{
       return <div>
           <h1>{el.title}</h1>
        <h2>{el.qty}</h2>
      <button onClick={()=>{handleinc(el.id)}}>inc</button>
      <button  onClick={()=>{handledec(el.id)}}>dec</button>
      <button onClick={()=>{handleremove(el.id)}}>Remove</button>
      <h3>price: {el.payprice}</h3>
        </div>
      })}
      <button onClick = {()=>{handleupdate()}}>update</button>
        <h1>Total:{totalprice}</h1>
        <button onClick={handleempty}>empty</button>
    </>
  
  )
}

