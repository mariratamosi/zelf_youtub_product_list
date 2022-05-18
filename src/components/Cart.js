import "../styles/Cart.scss"

import { useEffect } from "react"

const Cart = ({ items, subtotal }) => {
  useEffect(() => {
    console.log(items)

    if (items) {
      Object.keys(items).map((key, idx) => <p key={idx}>items[key].name</p>)
    }
  }, [items])

  if (!items) return <div>Loading...</div>

  // creator_banner_url, creator_icon_url, creator_name, creator_subscriber_count

  return (
    <>
      <div className="cart-container">
        <div className="select-loader-container">
          <div className="select-text">Select Items</div>
          <div className="select-loader"></div>
        </div>
        <div className="cart-items">
          {Object.keys(items).map((key, idx) => (
            <p key={idx}>{items[key].name}</p>
          ))}
        </div>
        <div className="subtotal">{subtotal}</div>
      </div>
      <div className="cart-checkout">Checkout</div>
    </>
  )
}

export default Cart
