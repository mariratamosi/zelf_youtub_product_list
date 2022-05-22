import React from "react"
import "./styles/App.scss"
import Navbar from "./components/Navbar"
import ProductListPage from "./components/ProductListPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductListPage />
    </div>
  )
}

export default App
