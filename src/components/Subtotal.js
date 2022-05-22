import "../styles/subtotal.scss"

const Subtotal = ({ subtotalFromStore }) => {
  return (
    <div
      className={`stick-bottom-70 subtotal-parent ${
        subtotalFromStore ? "non-empty" : "empty"
      }`}
    >
      <div className="subtotal-container">
        <div className="subtotal-text">Subtotal</div>
        <div className="subtotal">${(subtotalFromStore / 100).toFixed(2)}</div>
      </div>
    </div>
  )
}

export default Subtotal
