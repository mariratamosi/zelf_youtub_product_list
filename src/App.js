import React, { useEffect, useState } from "react"
import "./styles/App.scss"
import Navbar from "./components/Navbar"
import { fetchBuildingProducListData } from "./service/networkService"
import Profile from "./components/Profile"
import Cart from "./components/Cart"

function App() {
  const [profileInfo, setProfileInfo] = useState(null)
  const [items, setItems] = useState(null)
  const [subtotal, setSubTotal] = useState(0)

  useEffect(() => {
    console.log("product start")
    fetchBuildingProducListData("data.json")
      .then((pageData) => {
        console.log(pageData)
        setProfileInfo(pageData.creator_statics)
        setItems(pageData.items)
        setSubTotal(pageData.subtotal_price_in_cents)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Profile profileInfo={profileInfo} />
      <Cart items={items} subtotal={subtotal} />
    </div>
  )
}

export default App
