import React, { useEffect, useState } from "react"
import "./styles/App.scss"
import Navbar from "./components/Navbar"
import { fetchBuildingProducListData } from "./service/networkService"
import ProductListPage from "./components/ProductListPage"

function App() {
  const [profileInfo, setProfileInfo] = useState(null)
  const [items, setItems] = useState(null)
  const [subtotal, setSubTotal] = useState(0)
  const [title, setTitle] = useState("")

  useEffect(() => {
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
      <ProductListPage
        profileInfo={profileInfo}
        items={items}
        subtotal={subtotal}
        title={title}
      />
    </div>
  )
}

export default App
