import useStore from "../store/store"

const Subtotal = ({ subtotal }) => {
  const selectedItems = useStore((state) => state.selectedItems)

  return (
    <div
      className={`stick-bottom-70 subtotal-parent ${
        selectedItems.length ? "non-empty" : "empty"
      }`}
    >
      <div className="subtotal-container">
        <div className="subtotal-text">Subtotal</div>
        <div className="subtotal">${(subtotal / 100).toFixed(2)}</div>
      </div>
    </div>
  )
}

export default Subtotal
