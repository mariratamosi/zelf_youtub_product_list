import "../styles/Cart.scss"
import CollapsibleContent from "./basic/CollapsibleContent"
import Product from "./Product"

const Cart = ({
  items,
  title,
  addItemToStore,
  removeItemFromStore,
  selectedItems,
}) => {
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
        <CollapsibleContent cart_id={cart_id} title={title}>
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
        </CollapsibleContent>
      </div>
    </>
  )
}

export default Cart
