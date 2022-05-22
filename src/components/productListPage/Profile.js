import "../../styles/Profile.scss"
import { numFormatter } from "../../utility/Utility"

const Profile = ({ profileInfo }) => {
  return (
    profileInfo && (
      <div className="creator-profile">
        <div
          className="creator-banner"
          style={{
            backgroundImage: `url(${profileInfo.creator_banner_url})`,
          }}
        ></div>
        <div className="creator-name-icon">
          <div className="creator-icon">
            <img src={profileInfo.creator_icon_url} alt="{creator_name}"></img>
          </div>
          <div className="creator-name-subs">
            <div className="creator-name">{profileInfo.creator_name}</div>
            <div className="creator-subs-count">
              {numFormatter(profileInfo.creator_subscriber_count)} subscribers
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Profile
