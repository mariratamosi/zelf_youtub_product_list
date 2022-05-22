import "../styles/Cart.scss"
import Product from "./Product"
import downvote from "../assets/downvote_.svg"
import { useState } from "react"

const Cart = ({
  items,
  title,
  addItemToStore,
  removeItemFromStore,
  selectedItems,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const handleCollapseOrExpand = () => {
    setIsCollapsed(!isCollapsed)
  }

  const handleOnKeyPress = (event) => {
    const keys = ["Enter", "Spacebar", " "]
    if (keys.includes(event.key)) {
      handleCollapseOrExpand()
    }
  }

  const cart_id = "collapsible-cart"

  return (
    <>
      <div
        className={`cart-container ${
          selectedItems.length ? "non-empty" : "empty"
        }`}
      >
        <div className="select-loader-container">
          <div className="select-text">Select Items</div>
          <div className="select-loader"></div>
        </div>
        <div
          className={`cart-and-title ${isCollapsed ? "collapsed" : "expanded"}`}
        >
          <div
            className="cart-title-collapsible"
            onClick={handleCollapseOrExpand}
            aria-expanded={!isCollapsed}
            role="button"
            aria-controls={`${cart_id}-content`}
            onKeyDown={handleOnKeyPress}
            tabIndex="0"
            aria-labelledby={`${cart_id}-title`}
          >
            <div className="yz-icon">
              <img src={downvote} alt="Collapse"></img>
            </div>
            <div className="title" id={`${cart_id}-title`}>
              {title}
            </div>
          </div>
          <div className="cart-items" id={`${cart_id}-content`}>
            {Object.keys(items).map((key, idx) => {
              return (
                <Product
                  key={idx}
                  item={items[key]}
                  addItemToStore={addItemToStore}
                  removeItemFromStore={removeItemFromStore}
                  selectedItems={selectedItems}
                ></Product>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
