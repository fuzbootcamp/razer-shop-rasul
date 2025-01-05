import React from 'react'
import { useCart } from 'react-use-cart'
import { FaTrashCan } from "react-icons/fa6";
import axios from 'axios';

const Cart = () => {
  const {items,isEmpty,updateItemQuantity,removeItem,cartTotal,emptyCart} = useCart()
  const postTest = () => {
    axios
    .post(
      `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
        `<b>Details:</b>

    <b>The operation was completed successfully!</b>
    <b>our couriers will contact you soon!</b>
    <b> Call Center: +998 33 066 39 46 </b>
    
${items
  .map((item) => {
    return `
<b>${item.name}</b>
${item.quantity} x ${item.price} $ = ${item.quantity} 
    `;
  })
  .join("")}        
<b>Total:</b> ${cartTotal} $`
      )}&parse_mode=html`
    )
    .then(() =>  {
      emptyCart()
      window.location.reload()
    })
  };





  return (
    <div className='container'>
      {isEmpty ? (
        <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
      ):(
        <div className="cart">
          {items.map((el) => {
            const priceCount = el.quantity * el.price;
            return(
              <div className="cart_item">
                <div className="double">
                  <p>{el.name}</p>
                  <img src={el.image} alt="" />
                </div>
                <h4>{priceCount.toLocaleString()}$</h4>
                <span>
                  <button onClick={() => updateItemQuantity(el.id, el.quantity- 1)}>-</button>
                  <b>{el.quantity}</b>
                  <button onClick={() => updateItemQuantity(el.id, el.quantity+ 1)}>+</button>
                </span>
                <FaTrashCan onClick={() => removeItem(el.id)} className='icon' />

              </div>
            )
          })}
        </div>
      )}
      <div className="cart_total">
        <h1>Total:</h1>
        <h2>{cartTotal}$</h2>
        {localStorage.getItem('Tel') ? (
          <button onClick={() => postTest()}>Order</button>
        ):(
          <button onClick={() => window.location.href = '/login'}>Login</button>
        )}
      </div>
    </div>
  )
}

export default Cart
