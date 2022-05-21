import "../styles/Navbar.scss"
import cart from "../assets/cart.svg"
import zelf_text from "../assets/Zelf.svg"
import zelf_logo from "../assets/logo.svg"

function Navbar({ itemCount }) {
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
        <div
          className={`cart ${itemCount ? "non-empty" : ""}`}
          data-count={itemCount}
        >
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
