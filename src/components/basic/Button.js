import "../../styles/basic/buttons.scss"

const YZButton = ({ btnText, btnClasses, onClick }) => {
  return (
    <button className={`yz-btn ${btnClasses}`} onClick={onClick} type="button">
      {btnText}
    </button>
  )
}

export default YZButton
