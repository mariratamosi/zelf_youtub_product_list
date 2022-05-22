import "../../styles/Product.scss"
import downvote from "../../assets/downvote.svg"
import YZButton from "../basic/Button"
import { useState } from "react"

const Product = ({
  item,
  addItemToStore,
  removeItemFromStore,
  selectedItems,
}) => {
  const [isSelected, setIsSelected] = useState(
    selectedItems.filter((selectedItem) => selectedItem.id === item.id).length
  )

  const addToCartOrRemove = () => {
    if (!isSelected) {
      addItemToStore(item)
    } else {
      removeItemFromStore(item.name, item.sale_price_in_cents)
    }

    setIsSelected(!isSelected)
  }

  return (
    <div className="sc-item collapsed">
      <div className="sc-item-image">
        <img src={item.image.replace("jpeg", "png")} alt={item.name}></img>
      </div>
      <div className="desc-and-btns">
        <div className="sc-item-short-desc">
          <div className="desc-left">
            <div>
              <span className="sold-by-text">Sold by</span>
              <span className="sold-by-brand">{item.sold_by_brand}</span>
            </div>
            <div className="item-name">{item.name}</div>
            <div className="item-color-container">
              <div className="color-count">1</div>
              <div className="color-dot-between"></div>
              <div className="item-color-thumbnail">
                <img src={item.color_thumbnail} alt=""></img>
              </div>
              <div className="item-color">{item.color}</div>
            </div>
          </div>
          <div className="desc-right">
            {item.price_in_cents !== item.sale_price_in_cents && (
              <div className="org-price price">
                ${(item.price_in_cents / 100).toFixed(2)}
              </div>
            )}

            <div className="sale-price price">
              ${(item.sale_price_in_cents / 100).toFixed(2)}
            </div>
          </div>
        </div>
        <div className="btns-and-collapse">
          <div className="cart-small-btns">
            <YZButton btnText={"Buy now"} btnClasses={"yz-sm-btn"} />
            <YZButton
              btnText={isSelected ? "Remove" : "Add to cart"}
              btnClasses={"yz-sm-btn"}
              onClick={addToCartOrRemove}
            />
          </div>
          <div className="yz-icon">
            <img src={downvote} alt="Collapse"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
