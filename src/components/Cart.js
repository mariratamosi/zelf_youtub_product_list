import "../styles/Cart.scss"
import Product from "./Product"
import downvote from "../assets/downvote.svg"

import { useEffect } from "react"

const Cart = ({ items, subtotal, title }) => {
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
        <div className="cart-and-title">
          <div className="cart-title-collapsible">
            <div className="yz-icon">
              <img src={downvote} alt="Collapse"></img>
            </div>
            <div className="title">{title}</div>
          </div>
          <div className="cart-items">
            {Object.keys(items).map((key, idx) => (
              <Product key={idx} item={items[key]}></Product>
            ))}
          </div>
        </div>
        <div className="subtotal">{subtotal}</div>
      </div>
      <div className="cart-checkout">Checkout</div>
    </>
  )
}

export default Cart
