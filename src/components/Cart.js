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
          >
            <div className="yz-icon">
              <img src={downvote} alt="Collapse"></img>
            </div>
            <div className="title">{title}</div>
          </div>
          <div className="cart-items">
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
