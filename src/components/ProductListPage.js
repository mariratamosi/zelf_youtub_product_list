import Profile from "./Profile"
import Cart from "./Cart"
import YZButton from "./basic/Button"
import Subtotal from "./Subtotal"

function ProductListPage({ profileInfo, items, subtotal, title }) {
  return (
    <>
      <Profile profileInfo={profileInfo} />
      <Cart items={items} subtotal={subtotal} title={title} />
      <Subtotal subtotal={subtotal} />
      <div className="stick-bottom">
        <YZButton btnText={"Checkout"} btnClasses={"yz-fs-btn"} />
      </div>
    </>
  )
}

export default ProductListPage
