import downvote from "../../assets/downvote_.svg"
import { useState } from "react"

const CollapsibleContent = ({ children, cart_id, title }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const handleCollapseOrExpand = () => {
    setIsCollapsed(!isCollapsed)
  }

  const handleOnKeyPress = (event) => {
    const keys = ["Enter", "Spacebar", " "]
    if (keys.includes(event.key)) {
      handleCollapseOrExpand()
    }
  }

  return (
    <div className={`cart-and-title ${isCollapsed ? "collapsed" : "expanded"}`}>
      <div
        className="cart-title-collapsible"
        onClick={handleCollapseOrExpand}
        aria-expanded={!isCollapsed}
        role="button"
        aria-controls={`${cart_id}-content`}
        onKeyDown={handleOnKeyPress}
        tabIndex="0"
        aria-labelledby={`${cart_id}-title`}
      >
        <div className="yz-icon">
          <img src={downvote} alt="Collapse"></img>
        </div>
        <div className="title" id={`${cart_id}-title`}>
          {title}
        </div>
      </div>
      {children}
    </div>
  )
}

export default CollapsibleContent
