import "../styles/Navbar.scss"
import cart from "../assets/cart.svg"
import zelf_text from "../assets/Zelf.svg"
import zelf_logo from "../assets/logo.svg"
import { useEffect, useState } from "react"
import useStore from "../store/store"
import { countElem } from "../utility/Utility"

function Navbar() {
  const selectedItems = useStore((state) => state.selectedItems)
  const [selectedCount, setSelectedCount] = useState(countElem(selectedItems))

  useEffect(() => {
    console.log(selectedItems, countElem(selectedItems))
    setSelectedCount(countElem(selectedItems))
  }, [selectedItems])

  return (
    <div className="yz-navbar">
      <a
        className="company-name-text"
        href="https://hellozelf.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={zelf_text} alt="Zelf."></img>
      </a>
      <div className="nav-info">
        <div className="cart" data-count={selectedCount}>
          <img src={cart} alt="Cart"></img>
        </div>
        <a
          className="zelf-logo"
          href="https://hellozelf.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={zelf_logo} alt="Zelf."></img>
        </a>
      </div>
    </div>
  )
}

export default Navbar
