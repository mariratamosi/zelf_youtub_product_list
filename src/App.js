import React, { useEffect, useState } from "react"
import "./styles/App.scss"
import Navbar from "./components/Navbar"
import { fetchBuildingProducListData } from "./service/networkService"
import Profile from "./components/Profile"
import Cart from "./components/Cart"
import YZButton from "./components/basic/Button"

function App() {
  const [profileInfo, setProfileInfo] = useState(null)
  const [items, setItems] = useState(null)
  const [subtotal, setSubTotal] = useState(0)
  const [title, setTitle] = useState("")

  useEffect(() => {
    console.log("product start")
    fetchBuildingProducListData("data2.json")
      .then((pageData) => {
        console.log(pageData)
        setProfileInfo(pageData.creator_statics)
        setItems(pageData.items)
        setSubTotal(pageData.subtotal_price_in_cents)
        setTitle(pageData.cart_title)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Profile profileInfo={profileInfo} />
      <Cart items={items} subtotal={subtotal} title={title} />
      <div className="stick-bottom-70">
        <div className="subtotal-container">
          <div className="subtotal-text">Subtotal</div>
          <div className="subtotal">${(subtotal / 100).toFixed(2)}</div>
        </div>
      </div>
      <div className="stick-bottom">
        <YZButton btnText={"Checkout"} btnClasses={"yz-fs-btn"} />
      </div>
    </div>
  )
}

export default App
