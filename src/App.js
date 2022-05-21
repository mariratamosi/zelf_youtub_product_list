import React, { useEffect, useState } from "react"
import "./styles/App.scss"
import Navbar from "./components/Navbar"
import { fetchBuildingProducListData } from "./service/networkService"
import ProductListPage from "./components/ProductListPage"
import useStore from "./store/store"

function App() {
  const selectedItems = useStore((state) => state.selectedItems)

  const [pageData, setPageData] = useState(null)

  useEffect(() => {
    fetchBuildingProducListData("data2.json")
      .then((pageData) => {
        setPageData(pageData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <Navbar itemCount={selectedItems.length} />
      <ProductListPage pageData={pageData} />
    </div>
  )
}

export default App
