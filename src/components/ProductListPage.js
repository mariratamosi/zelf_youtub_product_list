import Profile from "./Profile"
import Cart from "./Cart"
import YZButton from "./basic/Button"
import Subtotal from "./Subtotal"
import Loading from "./basic/Loading"

function ProductListPage({ pageData }) {
  return pageData != null ? (
    <>
      <Profile profileInfo={pageData.creator_statics} />
      <Cart
        items={pageData.items}
        subtotal={pageData.subtotal_price_in_cents}
        title={pageData.cart_title}
      />
      <Subtotal subtotal={pageData.subtotal_price_in_cents} />
      <div className="stick-bottom">
        <YZButton btnText={"Checkout"} btnClasses={"yz-fs-btn"} />
      </div>
    </>
  ) : (
    <Loading />
  )
}

export default ProductListPage
