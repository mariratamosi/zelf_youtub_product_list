import "../styles/Product.scss"
import downvote from "../assets/downvote.svg"

const Product = ({ item }) => {
  if (!item) return <div>Loading...</div>

  // creator_banner_url, creator_icon_url, creator_name, creator_subscriber_count

  return (
    <div className="sc-item">
      <div className="sc-item-image">
        <img src={item.image.replace("jpeg", "png")} alt="Collapse"></img>
      </div>
      <div className="desc-and-btns">
        <div className="sc-item-short-desc">
          <div className="desc-left">
            <div>
              <span className="sold-by-text">Sold by</span>
              <span className="sold-by-brand">{item.sold_by_brand}</span>
            </div>
            <div className="item-name">{item.name}</div>
            <div className="item-color">{item.color}</div>
          </div>
          <div className="desc-right">
            <div className="org-price price">${item.price_in_cents / 1000}</div>
            <div className="sale-price price">
              ${item.sale_price_in_cents / 1000}
            </div>
          </div>
        </div>
        <div className="btns-and-collapse">
          <div className="cart-small-btns">
            <div className="yz-sm-btn">Buy now</div>
            <div className="yz-sm-btn">Add to cart</div>
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
