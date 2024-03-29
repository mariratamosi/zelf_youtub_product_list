import { useEffect, useState } from "react"
import Profile from "./productListPage/Profile"
import Cart from "./productListPage/Cart"
import Subtotal from "./productListPage/Subtotal"
import YZButton from "./basic/Button"
import Loading from "./basic/Loading"
import useStore from "../store/store"
import { fetchBuildingProducListData } from "../service/networkService"

function ProductListPage() {
  const [pageData, setPageData] = useState(null)

  useEffect(() => {
    fetchBuildingProducListData("data.json")
      .then((pageData) => {
        setPageData(pageData)
      })
      .catch((err) => {
        //TODO: add error state
        console.log(err)
      })
  }, [])

  const subtotalFromStore = useStore((state) => state.subtotal)
  const addItemToStore = useStore((state) => state.addItemToStore)
  const removeItemFromStore = useStore((state) => state.removeItemFromStore)
  const selectedItems = useStore((state) => state.selectedItems)

  return pageData != null ? (
    <>
      <Profile profileInfo={pageData.creator_statics} />
      <Cart
        items={pageData.items}
        subtotal={pageData.subtotal_price_in_cents}
        title={pageData.cart_title}
        addItemToStore={addItemToStore}
        removeItemFromStore={removeItemFromStore}
        selectedItems={selectedItems}
      />
      <Subtotal subtotalFromStore={subtotalFromStore} />
      <div className="stick-bottom full-sticked">
        <YZButton btnText={"Checkout"} btnClasses={"yz-fs-btn"} />
      </div>
    </>
  ) : (
    <Loading />
  )
}

export default ProductListPage
