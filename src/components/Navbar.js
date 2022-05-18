import "../styles/Navbar.scss"
import cart from "../assets/cart.svg"
import zelf_text from "../assets/Zelf.svg"
import zelf_logo from "../assets/logo.svg"

function Navbar() {
  const count = 5
  return (
    <div className="yz-navbar">
      <div className="company-name-text">
        <img src={zelf_text} alt="Zelf."></img>
      </div>
      <div className="nav-info">
        <div className="cart" data-count={count}>
          <img src={cart} alt="Cart"></img>
        </div>
        <div className="zelf-logo">
          <img src={zelf_logo} alt="Zelf."></img>
        </div>
      </div>
    </div>
  )
}

export default Navbar
