import React, { useEffect, useState } from "react"
import "./styles/App.scss"
import Navbar from "./components/Navbar"
import { fetchBuildingProducListData } from "./service/networkService"

function App() {
  const [profileInfo, setProfileInfo] = useState(null)
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetchBuildingProducListData("data.json")
      .then((pageData) => {
        console.log(pageData)
        setProfileInfo(pageData.creator_statics)
        setItems(pageData.items)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <div className="App">
      <Navbar />
      <div>Profile info</div>
      <div>Cart details</div>
    </div>
  )
}

export default App
